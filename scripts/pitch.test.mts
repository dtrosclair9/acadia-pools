// Run: node --test scripts/pitch.test.mts
import { test } from 'node:test'
import assert from 'node:assert/strict'
// @ts-expect-error node strips types; Next's checker doesn't need to resolve the .ts extension here
import { scorePitch } from '../src/lib/pitch.ts'

test('the Melotto Group pitch Dayne got is flagged', () => {
  const v = scorePitch({
    name: 'Hannah Melotto', phone: '2158218810', email: 'h.melotto@melottogroup.com',
    message: "Hey! I'm Hannah from Melotto Group. We help businesses redesign and refresh their websites. With 2027 just around the corner, now is a great time to give your website a new look and feel. We have nearly a decade of experience and would love the opportunity to work with you. I'd be happy to share samples of our work and pricing if you're interested. You can book a time with me to chat. Hoping to connect! https://calendly.com/melottogroup/30min",
  })
  assert.equal(v.pitch, true, JSON.stringify(v))
})

test('a data-vendor pitch with an opt-out line is flagged', () => {
  const v = scorePitch({ phone: '6465550100', email: 'jason@renaissancedatalabs.com',
    message: "Hi Matt, we generate qualified leads for pool builders. Open to a quick 15-minute call? Book here or email me. If it's not relevant, let me know and we won't reach out again. Jason Horowitz, Renaissance Data Lab" })
  assert.equal(v.pitch, true, JSON.stringify(v))
})

test('real pool inquiries are NOT flagged', () => {
  const real = [
    { phone: '9854132000', email: 'kim.b@gmail.com', message: 'Looking for a quote on a pool with a sun shelf and a small spa. We are in Bayou Blue.' },
    { phone: '2145550199', email: 'newhouse@yahoo.com', message: 'We just moved to Thibodaux from Dallas and want a pool built next spring. Saw your website and the gallery.' },
    { phone: '9855551234', email: 'mike@lafourchefab.com', message: 'Our old pool needs resurfacing and new tile. Can you take a look? I am with Lafourche Fab, here is a photo: https://photos.app.goo.gl/abc' },
    { phone: '5045550123', email: 'jen@icloud.com', message: '' },
  ]
  for (const r of real) {
    const v = scorePitch(r)
    assert.equal(v.pitch, false, `${r.message} -> ${JSON.stringify(v)}`)
  }
})
