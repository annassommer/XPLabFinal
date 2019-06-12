// In this file you can specify the trial data for your experiment


const trial_info = {
    rate_pers: [
      {
        optionLeft: "Applies Equally to Humans and Non-Humans",
        optionRight: "Applies Uniquely to Humans",
        QUD: "How would you rate the following trait?",
        question: "Dominance",

      },
      {
        optionLeft: "Applies Equally to Humans and Non-Humans",
        optionRight: "Applies Uniquely to Humans",
        QUD: "How would you rate the following trait?",
        question: "Trustworthiness",

      },
      {
        optionLeft: "Applies Equally to Humans and Non-Humans",
        optionRight: "Applies Uniquely to Humans",
        QUD: "How would you rate the following trait?",
        question: "Extroversion",

      },
      {
        optionLeft: "Applies Equally to Humans and Non-Humans",
        optionRight: "Applies Uniquely to Humans",
        QUD: "How would you rate the following trait?",
        question: "Agreeableness",

      },
      {
        optionLeft: "Applies Equally to Humans and Non-Humans",
        optionRight: "Applies Uniquely to Humans",
        QUD: "How would you rate the following trait?",
        question: "Conscientiousness",

      },
      {
        optionLeft: "Applies Equally to Humans and Non-Humans",
        optionRight: "Applies Uniquely to Humans",
        QUD: "How would you rate the following trait?",
        question: "Patience",

      },
      {
        optionLeft: "Applies Equally to Humans and Non-Humans",
        optionRight: "Applies Uniquely to Humans",
        QUD: "How would you rate the following trait?",
        question: "Confidence",

      },
      {
        optionLeft: "Applies Equally to Humans and Non-Humans",
        optionRight: "Applies Uniquely to Humans",
        QUD: "How would you rate the following trait?",
        question: "Sensitivity",

      },
      {
        optionLeft: "Applies Equally to Humans and Non-Humans",
        optionRight: "Applies Uniquely to Humans",
        QUD: "How would you rate the following trait?",
        question: "Agressiveness",

      },
      {
        optionLeft: "Applies Equally to Humans and Non-Humans",
        optionRight: "Applies Uniquely to Humans",
        QUD: "How would you rate the following trait?",
        question: "Kindness",

      },
    ],
    rate_face: [

    ],
};

var images_upright = [];
var images_inverted = [];

for(i = 1; i <= 1; i++) {
  images_inverted.push({
      optionLeft: "Not at all humanlike",
      optionRight: "Very humanlike",
      picture: "images/inverted/Stimulus-Inverted-Black" + i + ".jpg",
      question: "How humanlike is this face?",
      pictureFormat: "Inverted",
      color: "Black"
  });
  images_inverted.push({
      optionLeft: "Not at all humanlike",
      optionRight: "Very humanlike",
      picture: "images/inverted/Stimulus-Inverted-White" + i + ".jpg",
      question: "How humanlike is this face?",
      pictureFormat: "Inverted",
      color: "White"
  });
  images_upright.push({
      optionLeft: "Not at all humanlike",
      optionRight: "Very humanlike",
      picture: "images/upright/Stimulus-Upright-Black" + i + ".jpg",
      question: "How humanlike is this face?",
      pictureFormat: "Upright",
      color: "Black"
  });
  images_upright.push({
      optionLeft: "Not at all humanlike",
      optionRight: "Very humanlike",
      picture: "images/upright/Stimulus-Upright-White" + i + ".jpg",
      question: "How humanlike is this face?",
      pictureFormat: "Upright",
      color: "White"
  });
}
shuffle(images_upright);
shuffle(images_inverted);
trial_info.rate_face = images_upright.concat(images_inverted);
shuffle(trial_info.rate_pers);
