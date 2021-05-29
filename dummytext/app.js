input = document.querySelector(".input");
btn = document.querySelector(".btn");
dummy = document.getElementById("dummytext");
copy = document.querySelector(".copy");
const dummytext = [
  `We're no strangers to love. You know the rules and so do I. A full commitment's what I'm thinking of. You wouldn't get this from any other guy, I just wanna tell you how I'm feeling. Gotta make you understand Never gonna give you up. Never gonna give you up. Never gonna let you down.Never gonna run around and desert you. Never gonna make you cry. Never gonna say goodbye. Never gonna tell a lie and hurt you.`,

  `
  
My ship went down in a sea of sound. When I woke up alone, I had everything. A handful of moments, I wished I could change. And a tongue like a nightmare that cut like a blade. In a city of fools, I was careful and cool. But they tore me apart like a hurricane. A handful of moments, I wished I could change. But I was carried away `,
  `
  
Once the last drop of rain has dried off the pavement. Shouldn't I find a stain, but I never do. The way the tires turn stones, on old county roads. They leave 'em muddy underneath. Reminds me of you.You find graffiti on the walls of old bathroom stalls. You know, you can scratch it right off. It's how it used to be.But like the dollar in your pocket, it's been spent and traded in. You can't change where it's been.Reminds me of me`,
  `

Hello there, The angel from my nightmare, The shadow in the background of the morgue. The unsuspecting victim of darkness in the valley. We can live like Jack and Sally If we want. Where you can always find me. And we'll have Halloween on Christmas. And in the night we'll wish this never ends, We'll wish this never ends.`,
  `

Even though we're going through it. And it makes you feel alone. Just know that I would die for you. Baby I would die for you, yeah. The distance and the time between us. It'll never change my mind, 'cause baby. I would die for you. Baby I would die for you, yeah`,
  `
  
No other boy ever made me feel beautiful, When I'm in your arms, feels like I have it all, Is it your tattoos or golden grill, That makes me feel this way? Got me spinning like a ballerina, Feeling gangsta every time I see ya,You're the king and, baby, I'm the queen of Disaster, disaster`,

  `

Keep talking. And I'll find a way to forgive you. See you in the light I wish to. Like I always do. And keep crying.Yeah, I'll find a way to make it my bad. Never mind you going behind my back. And leaving out the truth.Call me the queen of silver linings. And you can be king of good intentions. No matter what you do. No matter what you say. I'll always find a way to love you`,
  `

But it ended like a bad dream.Curtain opened, heard the crowd roar.This one's a repeat, seen it before. Rewind to the start before it all went wrong. Whats going on? Fast forward to the end, after everyone's gone home. And they've forgotten it all.`,
  `

I had a dream. I got everything I wanted. But when I wake up, I see. You with me. And you say, "As long as I'm here. No one can hurt you. Don't wanna lie here. But you can learn to. If I could change.The way that you see yourself. You wouldn't wonder why you hear. They don't deserve you"
  
  `,
];

btn.addEventListener("click", function () {
  const inputtext = parseInt(input.value);

  dummy.textContent = dummytext.slice(0, inputtext);
});

function copyText() {
  const copy = document.getElementById("dummytext");
  copy.select();
  document.execCommand("copy");
  document.getElementById("span").innerText = "Copied to Clipboard";
}
