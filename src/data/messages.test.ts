import test from 'node:test';
import assert from 'node:assert/strict';
import { MESSAGES, checkAnswer, getColorLabel } from './messages.ts';

test('has exactly 8 messages in order 1 to 8', () => {
  assert.equal(MESSAGES.length, 8);
  MESSAGES.forEach((msg, idx) => {
    assert.equal(msg.id, idx + 1);
  });
});

test('each message has valid attributes and 3 explanation cards', () => {
  for (const msg of MESSAGES) {
    assert.ok(['WHATSAPP', 'SMS'].includes(msg.appType));
    assert.ok(['VERDE', 'AMARELO', 'VERMELHO'].includes(msg.correctAnswer));
    assert.ok(msg.sender.length > 0);
    assert.ok(msg.statusLine.length > 0);
    assert.ok(msg.classificationTitle.length > 0);
    assert.equal(msg.cards.length, 3);
    for (const card of msg.cards) {
      assert.ok(card.title.length > 0);
      assert.ok(card.content.length > 0);
    }
  }
});

test('correct answers match specification', () => {
  const expectedAnswers = [
    'VERMELHO',
    'VERDE',
    'VERMELHO',
    'AMARELO',
    'VERMELHO',
    'VERDE',
    'VERMELHO',
    'VERMELHO',
  ];
  MESSAGES.forEach((msg, idx) => {
    assert.equal(msg.correctAnswer, expectedAnswers[idx]);
  });
});

test('checkAnswer correctly matches colors', () => {
  assert.equal(checkAnswer('VERDE', 'VERDE'), true);
  assert.equal(checkAnswer('VERMELHO', 'VERDE'), false);
  assert.equal(checkAnswer('AMARELO', 'AMARELO'), true);
});

test('getColorLabel returns correct uppercase text', () => {
  assert.equal(getColorLabel('VERDE'), 'SEGURO');
  assert.equal(getColorLabel('AMARELO'), 'PRECISO CONFIRMAR');
  assert.equal(getColorLabel('VERMELHO'), 'GOLPE');
});

test('website links are strictly lowercase and unclickable in data', () => {
  const msg8 = MESSAGES.find((m) => m.id === 8);
  assert.ok(msg8);
  assert.equal(msg8?.bubbles[0].linkText, 'inss-atualiza.exemplo.com');
  assert.ok(msg8?.cards[1].content.includes('gov.br'));
});
