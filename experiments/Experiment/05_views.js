// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://babe-project.github.io/babe-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = babeViews.view_generator("intro",{
    trials: 1,
    name: 'intro',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text:   `
            <br />
            <br />
            Thank you for participating in this experiment.
            <br />
            This experiment consists of two parts. Firstly you will be shown personality
            traits and tasked to rate them, then in the second part you will be shown
            faces and asked to rate them.
            `,
   buttonText: 'Begin the experiment'
});

// For most tasks, you need instructions views
const instructions = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'instrucions',
    title: 'Instructions for personality test',
    text:  `In this part of the experiment you will be shown a personality trait.
            <br />
            It is your task to rate this personality trait on how equal they apply
            to humans oand non-humans. 1 stands here for 'Applies Equally to Humans
            and Non-Humans' and 9 stands for 'Applies Uniquely to Humans'.
            <br />
            <br />
            If you are ready to start please press the start button`,
    buttonText: 'start the first task.'
});

const instructions_main = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'instrucions',
    title: 'Instructions for face rating task',
    text:  `In this part of the experiment you will be shown pictures of faces.
            <br />
            All of these faces have been subtly morphed with an artificial face,
            so none of them are fully human. Please rate them on how humanlike they are.
            1 stands here for 'Not at all humanlike' and 7 stands for 'Very humanlike'.
            <br />
            <br />
            If you are ready to start please press the start button`,
    buttonText: 'start the second task.'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = babeViews.view_generator("post_test",{
    trials: 1,
    name: 'post_test',
    title: 'Additional information',
    text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    // buttonText: 'Weiter',
    // age_question: 'Alter',
    // gender_question: 'Geschlecht',
    // gender_male: 'männlich',
    // gender_female: 'weiblich',
    // gender_other: 'divers',
    // edu_question: 'Höchster Bildungsabschluss',
    // edu_graduated_high_school: 'Abitur',
    // edu_graduated_college: 'Hochschulabschluss',
    // edu_higher_degree: 'Universitärer Abschluss',
    // languages_question: 'Muttersprache',
    // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = babeViews.view_generator("thanks", {
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in this experiment!',
    prolificConfirmText: 'Press the button'
});

/** trial (babe's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _babe (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://babe-project.github.io/babe-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://babe-project.github.io/babe-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://babe-project.github.io/babe-docs/01_designing_experiments/01_template_views/#trial-views
*/

const rate_personality = babeViews.view_generator('rating_scale2', {
    trials: trial_info.rate_pers.length,
    // name should be identical to the variable name
    name: 'rate_personality',
    data: trial_info.rate_pers,
});

const rate_face = babeViews.view_generator('rating_scale', {
    trials: trial_info.rate_face.length,
    // name should be identical to the variable name
    name: 'rate_face',
    data: trial_info.rate_face,
});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
//, self_paced_reading and self_paced_reading_rating_scale
