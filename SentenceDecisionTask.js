/***************************** 
 * Sentencedecisiontask *
 *****************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2025.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'SentenceDecisionTask';  // from the Builder filename that created this script
let expInfo = {
    'participant_id': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'tf_mapping': ["TrueFalse", "FalseTrue"],
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from fixationScript
currentBlockNumber = 0;
startBlockInstruction = "";

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0.9216, 0.9216, 0.9216]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Start_Task_RoutineRoutineBegin());
flowScheduler.add(Start_Task_RoutineRoutineEachFrame());
flowScheduler.add(Start_Task_RoutineRoutineEnd());
const blockLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blockLoopLoopBegin(blockLoopLoopScheduler));
flowScheduler.add(blockLoopLoopScheduler);
flowScheduler.add(blockLoopLoopEnd);







flowScheduler.add(End_Task_RoutineRoutineBegin());
flowScheduler.add(End_Task_RoutineRoutineEachFrame());
flowScheduler.add(End_Task_RoutineRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank You for Your Participation!', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank You for Your Participation!', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'experiment_stimuli/chooseBlocks.xlsx', 'path': 'experiment_stimuli/chooseBlocks.xlsx'},
    {'name': 'experiment_stimuli/Block1.xlsx', 'path': 'experiment_stimuli/Block1.xlsx'},
    {'name': 'experiment_stimuli/Block2.xlsx', 'path': 'experiment_stimuli/Block2.xlsx'},
    {'name': 'experiment_stimuli/Block3.xlsx', 'path': 'experiment_stimuli/Block3.xlsx'},
    {'name': 'experiment_stimuli/Block4.xlsx', 'path': 'experiment_stimuli/Block4.xlsx'},
    {'name': 'experiment_stimuli/Block5.xlsx', 'path': 'experiment_stimuli/Block5.xlsx'},
    {'name': 'experiment_stimuli/Block6.xlsx', 'path': 'experiment_stimuli/Block6.xlsx'},
    {'name': 'experiment_stimuli/Block7.xlsx', 'path': 'experiment_stimuli/Block7.xlsx'},
    {'name': 'experiment_stimuli/Block8.xlsx', 'path': 'experiment_stimuli/Block8.xlsx'},
    {'name': 'experiment_stimuli/Block9.xlsx', 'path': 'experiment_stimuli/Block9.xlsx'},
    {'name': 'experiment_stimuli/Block10.xlsx', 'path': 'experiment_stimuli/Block10.xlsx'},
    {'name': 'experiment_stimuli/chooseBlocks.xlsx', 'path': 'experiment_stimuli/chooseBlocks.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant_id"]}_${expName}_${expInfo["tf_mapping"]}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var Start_Task_RoutineClock;
var left;
var right;
var dynamic_text;
var left_response;
var right_response;
var InstructionText;
var StartKeyboard;
var RSVPClock;
var StimuliText;
var earlyMouseClick;
var LeftResponseInstruction;
var rightResponseInstruction;
var validResponseMouseClick;
var responsefixationCrossDisplay;
var Fixation_CrossClock;
var text;
var Midpoint_BreakClock;
var Instruction_Break;
var breakKeyPress;
var Start_Block_InstructionClock;
var blockInstruction;
var End_Task_RoutineClock;
var Instruction_Exit;
var endKeyPress;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Start_Task_Routine"
  Start_Task_RoutineClock = new util.Clock();
  document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
  });
  
  //disable downloading result to browser
  psychoJS._saveResults = 0;
  
  
  // Run 'Begin Experiment' code from mouseMappingScript
  if ((expInfo["tf_mapping"] === "TrueFalse")) {
      left = "True";
      right = "False";
  } else {
      left = "False";
      right = "True";
  }
  dynamic_text = `Sentence Judgement Task.
  
  You will complete 10 blocks of sentence judgement, with a 6-second break in between blocks.
  Each sentence will be presented to you one word at a time, followed by a fixation cross.
  For each sentence, you must indicate ${left}(left mouse click) if the sentence could be a literally true fact. For example, "The funny sound was his snore" is a statement that could be literally true; or ${right}(right mouse click) if the sentence could not be a literally true fact. For example, "The desert storm was a carrot" could never be true.
  Use the mouse to indicate "True" or "False" for each sentence as quickly and accurately as you can. The cross will turn purple once your response has been registered.
  
  Press the "spacebar" to begin.`
  ;
  left_response = left;
  right_response = right;
  
  InstructionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'InstructionText',
    text: dynamic_text,
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  StartKeyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "RSVP"
  RSVPClock = new util.Clock();
  StimuliText = new visual.TextStim({
    win: psychoJS.window,
    name: 'StimuliText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  earlyMouseClick = new core.Mouse({
    win: psychoJS.window,
  });
  earlyMouseClick.mouseClock = new util.Clock();
  LeftResponseInstruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'LeftResponseInstruction',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), (- 0.3)], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  rightResponseInstruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightResponseInstruction',
    text: right_response,
    font: 'Arial',
    units: undefined, 
    pos: [0.4, (- 0.3)], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  validResponseMouseClick = new core.Mouse({
    win: psychoJS.window,
  });
  validResponseMouseClick.mouseClock = new util.Clock();
  responsefixationCrossDisplay = new visual.TextStim({
    win: psychoJS.window,
    name: 'responsefixationCrossDisplay',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "Fixation_Cross"
  Fixation_CrossClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Midpoint_Break"
  Midpoint_BreakClock = new util.Clock();
  Instruction_Break = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instruction_Break',
    text: "You have completed the first run of the task.\nPress the 'spacebar' key to resume.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  breakKeyPress = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Start_Block_Instruction"
  Start_Block_InstructionClock = new util.Clock();
  blockInstruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'blockInstruction',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "End_Task_Routine"
  End_Task_RoutineClock = new util.Clock();
  Instruction_Exit = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instruction_Exit',
    text: 'You have now completed the task.  \n\nThank you for your participation!  \n\nYou may now close the experiment. Press the "x\' key to exit.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  endKeyPress = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var Start_Task_RoutineMaxDurationReached;
var _StartKeyboard_allKeys;
var Start_Task_RoutineMaxDuration;
var Start_Task_RoutineComponents;
function Start_Task_RoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Start_Task_Routine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Start_Task_RoutineClock.reset();
    routineTimer.reset();
    Start_Task_RoutineMaxDurationReached = false;
    // update component parameters for each repeat
    StartKeyboard.keys = undefined;
    StartKeyboard.rt = undefined;
    _StartKeyboard_allKeys = [];
    psychoJS.experiment.addData('Start_Task_Routine.started', globalClock.getTime());
    Start_Task_RoutineMaxDuration = null
    // keep track of which components have finished
    Start_Task_RoutineComponents = [];
    Start_Task_RoutineComponents.push(InstructionText);
    Start_Task_RoutineComponents.push(StartKeyboard);
    
    for (const thisComponent of Start_Task_RoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Start_Task_RoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Start_Task_Routine' ---
    // get current time
    t = Start_Task_RoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *InstructionText* updates
    if (t >= 0.0 && InstructionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InstructionText.tStart = t;  // (not accounting for frame time here)
      InstructionText.frameNStart = frameN;  // exact frame index
      
      InstructionText.setAutoDraw(true);
    }
    
    
    // if InstructionText is active this frame...
    if (InstructionText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *StartKeyboard* updates
    if (t >= 0.0 && StartKeyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      StartKeyboard.tStart = t;  // (not accounting for frame time here)
      StartKeyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { StartKeyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { StartKeyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { StartKeyboard.clearEvents(); });
    }
    
    // if StartKeyboard is active this frame...
    if (StartKeyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = StartKeyboard.getKeys({keyList: 'space', waitRelease: false});
      _StartKeyboard_allKeys = _StartKeyboard_allKeys.concat(theseKeys);
      if (_StartKeyboard_allKeys.length > 0) {
        StartKeyboard.keys = _StartKeyboard_allKeys[_StartKeyboard_allKeys.length - 1].name;  // just the last key pressed
        StartKeyboard.rt = _StartKeyboard_allKeys[_StartKeyboard_allKeys.length - 1].rt;
        StartKeyboard.duration = _StartKeyboard_allKeys[_StartKeyboard_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Start_Task_RoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Start_Task_RoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Start_Task_Routine' ---
    for (const thisComponent of Start_Task_RoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Start_Task_Routine.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(StartKeyboard.corr, level);
    }
    psychoJS.experiment.addData('StartKeyboard.keys', StartKeyboard.keys);
    if (typeof StartKeyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('StartKeyboard.rt', StartKeyboard.rt);
        psychoJS.experiment.addData('StartKeyboard.duration', StartKeyboard.duration);
        routineTimer.reset();
        }
    
    StartKeyboard.stop();
    // the Routine "Start_Task_Routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blockLoop;
function blockLoopLoopBegin(blockLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blockLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'experiment_stimuli/chooseBlocks.xlsx',
      seed: undefined, name: 'blockLoop'
    });
    psychoJS.experiment.addLoop(blockLoop); // add the loop to the experiment
    currentLoop = blockLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlockLoop of blockLoop) {
      snapshot = blockLoop.getSnapshot();
      blockLoopLoopScheduler.add(importConditions(snapshot));
      const trialLoopLoopScheduler = new Scheduler(psychoJS);
      blockLoopLoopScheduler.add(trialLoopLoopBegin(trialLoopLoopScheduler, snapshot));
      blockLoopLoopScheduler.add(trialLoopLoopScheduler);
      blockLoopLoopScheduler.add(trialLoopLoopEnd);
      blockLoopLoopScheduler.add(Fixation_CrossRoutineBegin(snapshot));
      blockLoopLoopScheduler.add(Fixation_CrossRoutineEachFrame());
      blockLoopLoopScheduler.add(Fixation_CrossRoutineEnd(snapshot));
      blockLoopLoopScheduler.add(Midpoint_BreakRoutineBegin(snapshot));
      blockLoopLoopScheduler.add(Midpoint_BreakRoutineEachFrame());
      blockLoopLoopScheduler.add(Midpoint_BreakRoutineEnd(snapshot));
      blockLoopLoopScheduler.add(Start_Block_InstructionRoutineBegin(snapshot));
      blockLoopLoopScheduler.add(Start_Block_InstructionRoutineEachFrame());
      blockLoopLoopScheduler.add(Start_Block_InstructionRoutineEnd(snapshot));
      blockLoopLoopScheduler.add(blockLoopLoopEndIteration(blockLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trialLoop;
function trialLoopLoopBegin(trialLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: ("experiment_stimuli/" + condsFile),
      seed: undefined, name: 'trialLoop'
    });
    psychoJS.experiment.addLoop(trialLoop); // add the loop to the experiment
    currentLoop = trialLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrialLoop of trialLoop) {
      snapshot = trialLoop.getSnapshot();
      trialLoopLoopScheduler.add(importConditions(snapshot));
      trialLoopLoopScheduler.add(RSVPRoutineBegin(snapshot));
      trialLoopLoopScheduler.add(RSVPRoutineEachFrame());
      trialLoopLoopScheduler.add(RSVPRoutineEnd(snapshot));
      trialLoopLoopScheduler.add(trialLoopLoopEndIteration(trialLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trialLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function blockLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(blockLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blockLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var RSVPMaxDurationReached;
var wordIndex;
var nextWordTime;
var words;
var currentWord;
var gotValidClick;
var early_clicked;
var early_response_time;
var early_response;
var mouse_response;
var validClick;
var valid_response_time;
var valid_resp;
var valid_mouse_response;
var RSVPMaxDuration;
var RSVPComponents;
function RSVPRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'RSVP' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    RSVPClock.reset(routineTimer.getTime());
    routineTimer.add(6.000000);
    RSVPMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from currentWordScript
    wordIndex = 0;
    nextWordTime = 0;
    words = Stimuli.split(" ");
    currentWord = words[wordIndex];
    
    // setup some python lists for storing info about the earlyMouseClick
    gotValidClick = false; // until a click is received
    earlyMouseClick.mouseClock.reset();
    // Run 'Begin Routine' code from storeEarlyMouseClick
    early_clicked = false;
    early_response_time = [];
    early_response = "";
    mouse_response = "";
    
    // setup some python lists for storing info about the validResponseMouseClick
    gotValidClick = false; // until a click is received
    // Run 'Begin Routine' code from storeValidResponseMouseClick
    validClick = false;
    valid_response_time = [];
    valid_resp = "";
    responsefixationCrossDisplay.setColor("black");
    valid_mouse_response = "";
    
    psychoJS.experiment.addData('RSVP.started', globalClock.getTime());
    RSVPMaxDuration = null
    // keep track of which components have finished
    RSVPComponents = [];
    RSVPComponents.push(StimuliText);
    RSVPComponents.push(earlyMouseClick);
    RSVPComponents.push(LeftResponseInstruction);
    RSVPComponents.push(rightResponseInstruction);
    RSVPComponents.push(validResponseMouseClick);
    RSVPComponents.push(responsefixationCrossDisplay);
    
    for (const thisComponent of RSVPComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
var buttons;
var validButtons;
function RSVPRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'RSVP' ---
    // get current time
    t = RSVPClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from currentWordScript
    if ((wordIndex < (words.length - 1))) {
        if ((t >= (nextWordTime + 0.5))) {
            wordIndex += 1;
            currentWord = words[wordIndex];
            nextWordTime = t;
        }
    }
    
    
    // *StimuliText* updates
    if (t >= 0.0 && StimuliText.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      StimuliText.setText(currentWord, false);
      // keep track of start time/frame for later
      StimuliText.tStart = t;  // (not accounting for frame time here)
      StimuliText.frameNStart = frameN;  // exact frame index
      
      StimuliText.setAutoDraw(true);
    }
    
    
    // if StimuliText is active this frame...
    if (StimuliText.status === PsychoJS.Status.STARTED) {
      // update params
      StimuliText.setText(currentWord, false);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (StimuliText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      StimuliText.tStop = t;  // not accounting for scr refresh
      StimuliText.frameNStop = frameN;  // exact frame index
      // update status
      StimuliText.status = PsychoJS.Status.FINISHED;
      StimuliText.setAutoDraw(false);
    }
    
    // Run 'Each Frame' code from storeEarlyMouseClick
    if (((t < 3.0) && (! early_clicked))) {
        buttons = earlyMouseClick.getPressed();
        if ((buttons[0] || buttons[2])) {
            early_clicked = true;
            early_response_time = earlyMouseClick.mouseClock.getTime();
            if (buttons[0]) {
                early_response = left;
                mouse_response = "left";
            } else {
                if (buttons[2]) {
                    early_response = right;
                    mouse_response = "right";
                }
            }
        }
    }
    
    
    // *LeftResponseInstruction* updates
    if (t >= 0.0 && LeftResponseInstruction.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      LeftResponseInstruction.setText(left_response, false);
      // keep track of start time/frame for later
      LeftResponseInstruction.tStart = t;  // (not accounting for frame time here)
      LeftResponseInstruction.frameNStart = frameN;  // exact frame index
      
      LeftResponseInstruction.setAutoDraw(true);
    }
    
    
    // if LeftResponseInstruction is active this frame...
    if (LeftResponseInstruction.status === PsychoJS.Status.STARTED) {
      // update params
      LeftResponseInstruction.setText(left_response, false);
    }
    
    frameRemains = 0.0 + 6.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (LeftResponseInstruction.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      LeftResponseInstruction.tStop = t;  // not accounting for scr refresh
      LeftResponseInstruction.frameNStop = frameN;  // exact frame index
      // update status
      LeftResponseInstruction.status = PsychoJS.Status.FINISHED;
      LeftResponseInstruction.setAutoDraw(false);
    }
    
    
    // *rightResponseInstruction* updates
    if (t >= 0.0 && rightResponseInstruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rightResponseInstruction.tStart = t;  // (not accounting for frame time here)
      rightResponseInstruction.frameNStart = frameN;  // exact frame index
      
      rightResponseInstruction.setAutoDraw(true);
    }
    
    
    // if rightResponseInstruction is active this frame...
    if (rightResponseInstruction.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 6.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (rightResponseInstruction.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      rightResponseInstruction.tStop = t;  // not accounting for scr refresh
      rightResponseInstruction.frameNStop = frameN;  // exact frame index
      // update status
      rightResponseInstruction.status = PsychoJS.Status.FINISHED;
      rightResponseInstruction.setAutoDraw(false);
    }
    
    
    // *responsefixationCrossDisplay* updates
    if (t >= 3.0 && responsefixationCrossDisplay.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      responsefixationCrossDisplay.tStart = t;  // (not accounting for frame time here)
      responsefixationCrossDisplay.frameNStart = frameN;  // exact frame index
      
      responsefixationCrossDisplay.setAutoDraw(true);
    }
    
    
    // if responsefixationCrossDisplay is active this frame...
    if (responsefixationCrossDisplay.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 3.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (responsefixationCrossDisplay.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      responsefixationCrossDisplay.tStop = t;  // not accounting for scr refresh
      responsefixationCrossDisplay.frameNStop = frameN;  // exact frame index
      // update status
      responsefixationCrossDisplay.status = PsychoJS.Status.FINISHED;
      responsefixationCrossDisplay.setAutoDraw(false);
    }
    
    // Run 'Each Frame' code from storeValidResponseMouseClick
    if (((t >= 3.0) && (! validClick))) {
        validButtons = validResponseMouseClick.getPressed();
        if ((validButtons[0] || validButtons[2])) {
            validClick = true;
            valid_response_time = validResponseMouseClick.mouseClock.getTime();
            if (validButtons[0]) {
                valid_resp = left;
                valid_mouse_response = "left";
            } else {
                if (validButtons[2]) {
                    valid_resp = right;
                    valid_mouse_response = "right";
                }
            }
            responsefixationCrossDisplay.setColor("purple");
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RSVPComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var correctStr;
var corr_text;
var corr;
var validStr;
var valid_corr_text;
var valid_corr;
function RSVPRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'RSVP' ---
    for (const thisComponent of RSVPComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('RSVP.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    // Run 'End Routine' code from storeEarlyMouseClick
    correctStr = (correct_answer ? "True" : "False");
    corr_text = ((early_response.toString() === correctStr) ? "yes" : ((early_response !== null) ? "no" : null));
    corr = ((early_response.toString() === correctStr) ? "1" : ((early_response !== null) ? "0" : null));
    trialLoop.addData("early_rt", early_response_time);
    trialLoop.addData("early_resp", early_response);
    trialLoop.addData("early_mouse_key_resp", mouse_response);
    trialLoop.addData("early_is_correct?", corr_text);
    trialLoop.addData("early_accuracy", corr);
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // Run 'End Routine' code from storeValidResponseMouseClick
    validStr = (correct_answer ? "True" : "False");
    valid_corr_text = ((valid_resp === validStr) ? "yes" : ((valid_resp !== null) ? "no" : null));
    valid_corr = ((valid_resp === validStr) ? "1" : ((valid_resp !== null) ? "0" : null));
    trialLoop.addData("valid_rt", valid_response_time);
    trialLoop.addData("valid_resp", valid_resp);
    trialLoop.addData("valid_mouse_key_resp", valid_mouse_response);
    trialLoop.addData("valid_is_correct?", valid_corr_text);
    trialLoop.addData("valid_accuracy", valid_corr);
    
    if (routineForceEnded) {
        routineTimer.reset();} else if (RSVPMaxDurationReached) {
        RSVPClock.add(RSVPMaxDuration);
    } else {
        RSVPClock.add(6.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Fixation_CrossMaxDurationReached;
var Fixation_CrossMaxDuration;
var Fixation_CrossComponents;
function Fixation_CrossRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Fixation_Cross' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Fixation_CrossClock.reset(routineTimer.getTime());
    routineTimer.add(15.000000);
    Fixation_CrossMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from fixationScript
    if (((blockLoop.thisN === 4) || (blockLoop.thisN === 9))) {
        continueRoutine = false;
    } else {
        continueRoutine = true;
    }
    
    psychoJS.experiment.addData('Fixation_Cross.started', globalClock.getTime());
    Fixation_CrossMaxDuration = null
    // keep track of which components have finished
    Fixation_CrossComponents = [];
    Fixation_CrossComponents.push(text);
    
    for (const thisComponent of Fixation_CrossComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Fixation_CrossRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Fixation_Cross' ---
    // get current time
    t = Fixation_CrossClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text.tStop = t;  // not accounting for scr refresh
      text.frameNStop = frameN;  // exact frame index
      // update status
      text.status = PsychoJS.Status.FINISHED;
      text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Fixation_CrossComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var currentBlockNumber;
var startBlockInstruction;
function Fixation_CrossRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Fixation_Cross' ---
    for (const thisComponent of Fixation_CrossComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Fixation_Cross.stopped', globalClock.getTime());
    // Run 'End Routine' code from fixationScript
    currentBlockNumber = (blockLoop.thisN + 2);
    startBlockInstruction = `You are about to start block ${currentBlockNumber} out of 10`;
    
    if (routineForceEnded) {
        routineTimer.reset();} else if (Fixation_CrossMaxDurationReached) {
        Fixation_CrossClock.add(Fixation_CrossMaxDuration);
    } else {
        Fixation_CrossClock.add(15.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Midpoint_BreakMaxDurationReached;
var _breakKeyPress_allKeys;
var Midpoint_BreakMaxDuration;
var Midpoint_BreakComponents;
function Midpoint_BreakRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Midpoint_Break' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Midpoint_BreakClock.reset();
    routineTimer.reset();
    Midpoint_BreakMaxDurationReached = false;
    // update component parameters for each repeat
    breakKeyPress.keys = undefined;
    breakKeyPress.rt = undefined;
    _breakKeyPress_allKeys = [];
    // Run 'Begin Routine' code from breakScript
    if ((blockLoop.thisN === 4)) {
        continueRoutine = true;
    } else {
        continueRoutine = false;
    }
    
    psychoJS.experiment.addData('Midpoint_Break.started', globalClock.getTime());
    Midpoint_BreakMaxDuration = null
    // keep track of which components have finished
    Midpoint_BreakComponents = [];
    Midpoint_BreakComponents.push(Instruction_Break);
    Midpoint_BreakComponents.push(breakKeyPress);
    
    for (const thisComponent of Midpoint_BreakComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Midpoint_BreakRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Midpoint_Break' ---
    // get current time
    t = Midpoint_BreakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instruction_Break* updates
    if (t >= 0.0 && Instruction_Break.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction_Break.tStart = t;  // (not accounting for frame time here)
      Instruction_Break.frameNStart = frameN;  // exact frame index
      
      Instruction_Break.setAutoDraw(true);
    }
    
    
    // if Instruction_Break is active this frame...
    if (Instruction_Break.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *breakKeyPress* updates
    if (t >= 0.0 && breakKeyPress.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      breakKeyPress.tStart = t;  // (not accounting for frame time here)
      breakKeyPress.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { breakKeyPress.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { breakKeyPress.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { breakKeyPress.clearEvents(); });
    }
    
    // if breakKeyPress is active this frame...
    if (breakKeyPress.status === PsychoJS.Status.STARTED) {
      let theseKeys = breakKeyPress.getKeys({keyList: 'space', waitRelease: false});
      _breakKeyPress_allKeys = _breakKeyPress_allKeys.concat(theseKeys);
      if (_breakKeyPress_allKeys.length > 0) {
        breakKeyPress.keys = _breakKeyPress_allKeys[_breakKeyPress_allKeys.length - 1].name;  // just the last key pressed
        breakKeyPress.rt = _breakKeyPress_allKeys[_breakKeyPress_allKeys.length - 1].rt;
        breakKeyPress.duration = _breakKeyPress_allKeys[_breakKeyPress_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Midpoint_BreakComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Midpoint_BreakRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Midpoint_Break' ---
    for (const thisComponent of Midpoint_BreakComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Midpoint_Break.stopped', globalClock.getTime());
    breakKeyPress.stop();
    // the Routine "Midpoint_Break" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Start_Block_InstructionMaxDurationReached;
var Start_Block_InstructionMaxDuration;
var Start_Block_InstructionComponents;
function Start_Block_InstructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Start_Block_Instruction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Start_Block_InstructionClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    Start_Block_InstructionMaxDurationReached = false;
    // update component parameters for each repeat
    blockInstruction.setText(startBlockInstruction);
    // Run 'Begin Routine' code from blockInstructionScript
    if ((blockLoop.thisN === 9)) {
        continueRoutine = false;
    } else {
        continueRoutine = true;
    }
    
    psychoJS.experiment.addData('Start_Block_Instruction.started', globalClock.getTime());
    Start_Block_InstructionMaxDuration = null
    // keep track of which components have finished
    Start_Block_InstructionComponents = [];
    Start_Block_InstructionComponents.push(blockInstruction);
    
    for (const thisComponent of Start_Block_InstructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Start_Block_InstructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Start_Block_Instruction' ---
    // get current time
    t = Start_Block_InstructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blockInstruction* updates
    if (t >= 0.0 && blockInstruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blockInstruction.tStart = t;  // (not accounting for frame time here)
      blockInstruction.frameNStart = frameN;  // exact frame index
      
      blockInstruction.setAutoDraw(true);
    }
    
    
    // if blockInstruction is active this frame...
    if (blockInstruction.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (blockInstruction.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      blockInstruction.tStop = t;  // not accounting for scr refresh
      blockInstruction.frameNStop = frameN;  // exact frame index
      // update status
      blockInstruction.status = PsychoJS.Status.FINISHED;
      blockInstruction.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Start_Block_InstructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Start_Block_InstructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Start_Block_Instruction' ---
    for (const thisComponent of Start_Block_InstructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Start_Block_Instruction.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (Start_Block_InstructionMaxDurationReached) {
        Start_Block_InstructionClock.add(Start_Block_InstructionMaxDuration);
    } else {
        Start_Block_InstructionClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var End_Task_RoutineMaxDurationReached;
var _endKeyPress_allKeys;
var End_Task_RoutineMaxDuration;
var End_Task_RoutineComponents;
function End_Task_RoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'End_Task_Routine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    End_Task_RoutineClock.reset();
    routineTimer.reset();
    End_Task_RoutineMaxDurationReached = false;
    // update component parameters for each repeat
    endKeyPress.keys = undefined;
    endKeyPress.rt = undefined;
    _endKeyPress_allKeys = [];
    //disable downloading result to browser
    psychoJS._saveResults = 0;
    
    //create filename for result
    let now = new Date();
    let timestamp = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate()+'_'+now.getHours()+'h'+  now.getMinutes() + 'm' + now.getSeconds() + 's';
    let filename = timestamp +'_'+psychoJS._experiment._experimentName+'_'+ expInfo["tf_mapping"]+'_sub'+ expInfo["participant_id"]+'.csv'
    
    //extract result from experiment
    let dataObj = psychoJS._experiment._trialsData;
    const fields = ['participant_id','Block','correct_answer','Stimuli_Type','Stimuli','One_subsubj_two_subObj','valid_resp','valid_rt','valid_is_correct?','valid_accuracy','valid_mouse_key_resp','RSVP.started','RSVP.stopped','Start_Task_Routine.started','Start_Task_Routine.stopped','early_rt','early_resp','early_mouse_key_resp','early_accuracy','early_is_correct?'];
    
    // Build datatable
    let data = [
      fields.join(','), // header row
      ...dataObj.map(trial => {
        return fields.map(f => trial[f] !== undefined ? trial[f] : '').join(',');
      })
    ].join('\n');
    
    //send data to OSF through datapipe platform
    fetch("https://pipe.jspsych.org/api/data/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "*/*"
            },
            body: JSON.stringify({
                experimentID: 'SnhAIILNiRDu',
                filename: filename,
                data: data,
        }),
     }).then(response => response.json()).then(data => {
            console.log(data);
        })
        .catch((err) => {
            console.error("Failed to send trial data:", err);
        });
    
    
    psychoJS.experiment.addData('End_Task_Routine.started', globalClock.getTime());
    End_Task_RoutineMaxDuration = null
    // keep track of which components have finished
    End_Task_RoutineComponents = [];
    End_Task_RoutineComponents.push(Instruction_Exit);
    End_Task_RoutineComponents.push(endKeyPress);
    
    for (const thisComponent of End_Task_RoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function End_Task_RoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'End_Task_Routine' ---
    // get current time
    t = End_Task_RoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instruction_Exit* updates
    if (t >= 0.0 && Instruction_Exit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction_Exit.tStart = t;  // (not accounting for frame time here)
      Instruction_Exit.frameNStart = frameN;  // exact frame index
      
      Instruction_Exit.setAutoDraw(true);
    }
    
    
    // if Instruction_Exit is active this frame...
    if (Instruction_Exit.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *endKeyPress* updates
    if (t >= 0.0 && endKeyPress.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endKeyPress.tStart = t;  // (not accounting for frame time here)
      endKeyPress.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { endKeyPress.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { endKeyPress.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { endKeyPress.clearEvents(); });
    }
    
    // if endKeyPress is active this frame...
    if (endKeyPress.status === PsychoJS.Status.STARTED) {
      let theseKeys = endKeyPress.getKeys({keyList: 'x', waitRelease: false});
      _endKeyPress_allKeys = _endKeyPress_allKeys.concat(theseKeys);
      if (_endKeyPress_allKeys.length > 0) {
        endKeyPress.keys = _endKeyPress_allKeys[_endKeyPress_allKeys.length - 1].name;  // just the last key pressed
        endKeyPress.rt = _endKeyPress_allKeys[_endKeyPress_allKeys.length - 1].rt;
        endKeyPress.duration = _endKeyPress_allKeys[_endKeyPress_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of End_Task_RoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function End_Task_RoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'End_Task_Routine' ---
    for (const thisComponent of End_Task_RoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('End_Task_Routine.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(endKeyPress.corr, level);
    }
    psychoJS.experiment.addData('endKeyPress.keys', endKeyPress.keys);
    if (typeof endKeyPress.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('endKeyPress.rt', endKeyPress.rt);
        psychoJS.experiment.addData('endKeyPress.duration', endKeyPress.duration);
        routineTimer.reset();
        }
    
    endKeyPress.stop();
    // the Routine "End_Task_Routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
