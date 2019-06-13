// In this file you can specify the trial data for your experiment


const trial_info = {
    rate_pers: [
      {
        optionLeft: "Trifft gleichermaßen auf Menschen und Tiere zu",
        optionRight: "Trifft nur auf Menschen zu",
        QUD: "Wie bewerten sie das folgende Merkmal?",
        question: "Dominanz",

      },
      {
        optionLeft: "Trifft gleichermaßen auf Menschen und Tiere zu",
        optionRight: "Trifft nur auf Menschen zu",
        QUD: "Wie bewerten sie das folgende Merkmal?",
        question: "Vertrauenswürdigkeit",

      },
      {
        optionLeft: "Trifft gleichermaßen auf Menschen und Tiere zu",
        optionRight: "Trifft nur auf Menschen zu",
        QUD: "Wie bewerten sie das folgende Merkmal?",
        question: "Extrovertiertheit",

      },
      {
        optionLeft: "Trifft gleichermaßen auf Menschen und Tiere zu",
        optionRight: "Trifft nur auf Menschen zu",
        QUD: "Wie bewerten sie das folgende Merkmal?",
        question: "Angemessenheit",

      },
      {
        optionLeft: "Trifft gleichermaßen auf Menschen und Tiere zu",
        optionRight: "Trifft nur auf Menschen zu",
        QUD: "Wie bewerten sie das folgende Merkmal?",
        question: "Gewissenhaftigkeit",

      },
      {
        optionLeft: "Trifft gleichermaßen auf Menschen und Tiere zu",
        optionRight: "Trifft nur auf Menschen zu",
        QUD: "Wie bewerten sie das folgende Merkmal?",
        question: "Geduld",

      },
      {
        optionLeft: "Trifft gleichermaßen auf Menschen und Tiere zu",
        optionRight: "Trifft nur auf Menschen zu",
        QUD: "Wie bewerten sie das folgende Merkmal?",
        question: "Selbstsicherheit",

      },
      {
        optionLeft: "Trifft gleichermaßen auf Menschen und Tiere zu",
        optionRight: "Trifft nur auf Menschen zu",
        QUD: "Wie bewerten sie das folgende Merkmal?",
        question: "Sensibilität",

      },
      {
        optionLeft: "Trifft gleichermaßen auf Menschen und Tiere zu",
        optionRight: "Trifft nur auf Menschen zu",
        QUD: "Wie bewerten sie das folgende Merkmal?",
        question: "Agressivität",

      },
      {
        optionLeft: "Trifft gleichermaßen auf Menschen und Tiere zu",
        optionRight: "Trifft nur auf Menschen zu",
        QUD: "Wie bewerten sie das folgende Merkmal?",
        question: "Freundlichkeit",

      },
    ],
    rate_face: [

    ],
};

var images_upright = [];
var images_inverted = [];

for(i = 1; i <=1; i++) {
  images_inverted.push({
      optionLeft: "Das Merkmal " + coin + "trifft gar nicht zu.",
      optionRight: "Das Merkmal " + coin + "trifft total zu.",
      picture: "images/inverted/Stimulus-Inverted-Black" + i + ".jpg",
      question: "Wie sehr kann man das Merkmal " + coin + " auf das Gesicht zu?",
      pictureFormat: "Inverted",
      color: "Black",
      category: coin
  });
  images_inverted.push({
      optionLeft: "Das Merkmal " + coin + "trifft gar nicht zu.",
      optionRight: "Das Merkmal " + coin + "trifft total zu.",
      picture: "images/inverted/Stimulus-Inverted-White" + i + ".jpg",
      question: "Wie sehr kann man das Merkmal " + coin + " auf das Gesicht zu?",
      pictureFormat: "Inverted",
      color: "White",
      category: coin
  });
  images_upright.push({
      optionLeft: "Das Merkmal " + coin + "trifft gar nicht zu.",
      optionRight: "Das Merkmal " + coin + "trifft total zu.",
      picture: "images/upright/Stimulus-Upright-Black" + i + ".jpg",
      question: "Wie sehr kann man das Merkmal " + coin + " auf das Gesicht zu?",
      pictureFormat: "Upright",
      color: "Black",
      category: coin
  });
  images_upright.push({
      optionLeft: "Das Merkmal " + coin + "trifft gar nicht zu.",
      optionRight: "Das Merkmal " + coin + "trifft total zu.",
      picture: "images/upright/Stimulus-Upright-White" + i + ".jpg",
      question: "Wie sehr kann man das Merkmal " + coin + " auf das Gesicht zu?",
      pictureFormat: "Upright",
      color: "White",
      category: coin
  });
}
shuffle(images_upright);
shuffle(images_inverted);
trial_info.rate_face = images_upright.concat(images_inverted);
shuffle(trial_info.rate_pers);
