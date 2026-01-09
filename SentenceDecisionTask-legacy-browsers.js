/***************************** 
 * Sentencedecisiontask *
 *****************************/


// store info about the experiment session:
let expName = 'SentenceDecisionTask';  // from the Builder filename that created this script
let expInfo = {
    'participant_id': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'tf_mapping': ["TrueFalse", "FalseTrue"],
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
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
flowScheduler.add(quitPsychoJS, 'Have a Wonderful day!', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Have a Wonderful day!', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'experiment_stimuli/chooseBlocksTest.xlsx', 'path': 'experiment_stimuli/chooseBlocksTest.xlsx'},
    {'name': 'experiment_stimuli/chooseBlocksTest.xlsx', 'path': 'experiment_stimuli/chooseBlocksTest.xlsx'},
    {'name': 'experiment_stimuli/test6.xlsx', 'path': 'experiment_stimuli/test6.xlsx'},
    {'name': 'experiment_stimuli/test7.xlsx', 'path': 'experiment_stimuli/test7.xlsx'},
    {'name': 'experiment_stimuli/test8.xlsx', 'path': 'experiment_stimuli/test8.xlsx'},
    {'name': 'experiment_stimuli/test9.xlsx', 'path': 'experiment_stimuli/test9.xlsx'},
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
  dynamic_text = `Judge whether each sentence is literally true or false
  
  Left mouse click = ${left}
  Right mouse click = ${right}
  
  Press spacebar to begin.`
  ;
  left_response = `Left mouse click = ${left}`;
  right_response = `Right mouse click = ${right}`;
  
  InstructionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'InstructionText',
    text: dynamic_text,
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  StartKeyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Word_Setup"
  Word_SetupClock = new util.Clock();
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
  
  LeftResponseInstruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'LeftResponseInstruction',
    text: left_response,
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), (- 0.3)], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
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
    depth: -3.0 
  });
  
  earlyMouseClick = new core.Mouse({
    win: psychoJS.window,
  });
  earlyMouseClick.mouseClock = new util.Clock();
  // Initialize components for Routine "Particpant_Response"
  Particpant_ResponseClock = new util.Clock();
  validMouseClick = new core.Mouse({
    win: psychoJS.window,
  });
  validMouseClick.mouseClock = new util.Clock();
  responsefixationCross = new visual.TextStim({
    win: psychoJS.window,
    name: 'responsefixationCross',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  LeftResponseInstruction_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'LeftResponseInstruction_2',
    text: left_response,
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), (- 0.3)], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  rightResponseInstruction_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightResponseInstruction_2',
    text: right_response,
    font: 'Arial',
    units: undefined, 
    pos: [0.4, (- 0.3)], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
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
    
    Start_Task_RoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    Start_Task_RoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    Start_Task_RoutineComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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

function blockLoopLoopBegin(blockLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blockLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'experiment_stimuli/chooseBlocksTest.xlsx',
      seed: undefined, name: 'blockLoop'
    });
    psychoJS.experiment.addLoop(blockLoop); // add the loop to the experiment
    currentLoop = blockLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    blockLoop.forEach(function() {
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
      blockLoopLoopScheduler.add(blockLoopLoopEndIteration(blockLoopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

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
    trialLoop.forEach(function() {
      snapshot = trialLoop.getSnapshot();
    
      trialLoopLoopScheduler.add(importConditions(snapshot));
      trialLoopLoopScheduler.add(Word_SetupRoutineBegin(snapshot));
      trialLoopLoopScheduler.add(Word_SetupRoutineEachFrame());
      trialLoopLoopScheduler.add(Word_SetupRoutineEnd(snapshot));
      trialLoopLoopScheduler.add(RSVPRoutineBegin(snapshot));
      trialLoopLoopScheduler.add(RSVPRoutineEachFrame());
      trialLoopLoopScheduler.add(RSVPRoutineEnd(snapshot));
      trialLoopLoopScheduler.add(Particpant_ResponseRoutineBegin(snapshot));
      trialLoopLoopScheduler.add(Particpant_ResponseRoutineEachFrame());
      trialLoopLoopScheduler.add(Particpant_ResponseRoutineEnd(snapshot));
      trialLoopLoopScheduler.add(trialLoopLoopEndIteration(trialLoopLoopScheduler, snapshot));
    });
    
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

function Word_SetupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Word_Setup' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Word_SetupClock.reset();
    routineTimer.reset();
    Word_SetupMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from wordExtractionScript
    words = Stimuli.split(" ");
    console.log(words);
    
    psychoJS.experiment.addData('Word_Setup.started', globalClock.getTime());
    Word_SetupMaxDuration = null
    // keep track of which components have finished
    Word_SetupComponents = [];
    
    Word_SetupComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function Word_SetupRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Word_Setup' ---
    // get current time
    t = Word_SetupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
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
    Word_SetupComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Word_SetupRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Word_Setup' ---
    Word_SetupComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Word_Setup.stopped', globalClock.getTime());
    // the Routine "Word_Setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

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
    routineTimer.add(3.000000);
    RSVPMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from currentWordScript
    wordIndex = 0;
    nextWordTime = 0;
    currentWord = words[wordIndex];
    
    // setup some python lists for storing info about the earlyMouseClick
    gotValidClick = false; // until a click is received
    earlyMouseClick.mouseClock.reset();
    // Run 'Begin Routine' code from storeEarlyMouseClick
    clicked = false;
    early_response_time = [];
    early_response = "";
    mouse_response = "";
    
    psychoJS.experiment.addData('RSVP.started', globalClock.getTime());
    RSVPMaxDuration = null
    // keep track of which components have finished
    RSVPComponents = [];
    RSVPComponents.push(StimuliText);
    RSVPComponents.push(LeftResponseInstruction);
    RSVPComponents.push(rightResponseInstruction);
    RSVPComponents.push(earlyMouseClick);
    
    RSVPComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

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
    
    
    // *LeftResponseInstruction* updates
    if (t >= 0.0 && LeftResponseInstruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      LeftResponseInstruction.tStart = t;  // (not accounting for frame time here)
      LeftResponseInstruction.frameNStart = frameN;  // exact frame index
      
      LeftResponseInstruction.setAutoDraw(true);
    }
    
    
    // if LeftResponseInstruction is active this frame...
    if (LeftResponseInstruction.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
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
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (rightResponseInstruction.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      rightResponseInstruction.tStop = t;  // not accounting for scr refresh
      rightResponseInstruction.frameNStop = frameN;  // exact frame index
      // update status
      rightResponseInstruction.status = PsychoJS.Status.FINISHED;
      rightResponseInstruction.setAutoDraw(false);
    }
    
    // Run 'Each Frame' code from storeEarlyMouseClick
    buttons = earlyMouseClick.getPressed();
    if (((! clicked) && (buttons[0] || buttons[2]))) {
        clicked = true;
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
    RSVPComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function RSVPRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'RSVP' ---
    RSVPComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('RSVP.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    // Run 'End Routine' code from storeEarlyMouseClick
    corr_text = ((early_response === correct_answer.toString()) ? "yes" : ((early_response !== null) ? "no" : null));
    corr = ((early_response === correct_answer.toString()) ? "1" : ((early_response !== null) ? "0" : null));
    trialLoop.addData("early_rt", early_response_time);
    trialLoop.addData("early_resp", early_response);
    trialLoop.addData("early_mouse_key_resp", mouse_response);
    trialLoop.addData("early_is_correct?", corr_text);
    trialLoop.addData("early_accuracy", corr);
    
    if (routineForceEnded) {
        routineTimer.reset();} else if (RSVPMaxDurationReached) {
        RSVPClock.add(RSVPMaxDuration);
    } else {
        RSVPClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Particpant_ResponseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Particpant_Response' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Particpant_ResponseClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    Particpant_ResponseMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the validMouseClick
    gotValidClick = false; // until a click is received
    validMouseClick.mouseClock.reset();
    // Run 'Begin Routine' code from storeValidMouseClick
    clicked = false;
    response_time = [];
    resp = "";
    responsefixationCross.setColor("black");
    
    psychoJS.experiment.addData('Particpant_Response.started', globalClock.getTime());
    Particpant_ResponseMaxDuration = null
    // keep track of which components have finished
    Particpant_ResponseComponents = [];
    Particpant_ResponseComponents.push(validMouseClick);
    Particpant_ResponseComponents.push(responsefixationCross);
    Particpant_ResponseComponents.push(LeftResponseInstruction_2);
    Particpant_ResponseComponents.push(rightResponseInstruction_2);
    
    Particpant_ResponseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function Particpant_ResponseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Particpant_Response' ---
    // get current time
    t = Particpant_ResponseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *responsefixationCross* updates
    if (t >= 0.0 && responsefixationCross.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      responsefixationCross.setText('+', false);
      // keep track of start time/frame for later
      responsefixationCross.tStart = t;  // (not accounting for frame time here)
      responsefixationCross.frameNStart = frameN;  // exact frame index
      
      responsefixationCross.setAutoDraw(true);
    }
    
    
    // if responsefixationCross is active this frame...
    if (responsefixationCross.status === PsychoJS.Status.STARTED) {
      // update params
      responsefixationCross.setText('+', false);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (responsefixationCross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      responsefixationCross.tStop = t;  // not accounting for scr refresh
      responsefixationCross.frameNStop = frameN;  // exact frame index
      // update status
      responsefixationCross.status = PsychoJS.Status.FINISHED;
      responsefixationCross.setAutoDraw(false);
    }
    
    // Run 'Each Frame' code from storeValidMouseClick
    buttons = validMouseClick.getPressed();
    if (((! clicked) && (buttons[0] || buttons[2]))) {
        clicked = true;
        response_time = validMouseClick.mouseClock.getTime();
        if (buttons[0]) {
            resp = left;
            mouse_response = "left";
        } else {
            if (buttons[2]) {
                resp = right;
                mouse_response = "right";
            }
        }
        responsefixationCross.setColor("red");
    }
    
    
    // *LeftResponseInstruction_2* updates
    if (t >= 0.0 && LeftResponseInstruction_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      LeftResponseInstruction_2.tStart = t;  // (not accounting for frame time here)
      LeftResponseInstruction_2.frameNStart = frameN;  // exact frame index
      
      LeftResponseInstruction_2.setAutoDraw(true);
    }
    
    
    // if LeftResponseInstruction_2 is active this frame...
    if (LeftResponseInstruction_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (LeftResponseInstruction_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      LeftResponseInstruction_2.tStop = t;  // not accounting for scr refresh
      LeftResponseInstruction_2.frameNStop = frameN;  // exact frame index
      // update status
      LeftResponseInstruction_2.status = PsychoJS.Status.FINISHED;
      LeftResponseInstruction_2.setAutoDraw(false);
    }
    
    
    // *rightResponseInstruction_2* updates
    if (t >= 0.0 && rightResponseInstruction_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rightResponseInstruction_2.tStart = t;  // (not accounting for frame time here)
      rightResponseInstruction_2.frameNStart = frameN;  // exact frame index
      
      rightResponseInstruction_2.setAutoDraw(true);
    }
    
    
    // if rightResponseInstruction_2 is active this frame...
    if (rightResponseInstruction_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (rightResponseInstruction_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      rightResponseInstruction_2.tStop = t;  // not accounting for scr refresh
      rightResponseInstruction_2.frameNStop = frameN;  // exact frame index
      // update status
      rightResponseInstruction_2.status = PsychoJS.Status.FINISHED;
      rightResponseInstruction_2.setAutoDraw(false);
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
    Particpant_ResponseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Particpant_ResponseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Particpant_Response' ---
    Particpant_ResponseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Particpant_Response.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    // Run 'End Routine' code from storeValidMouseClick
    corr_text = ((resp === correct_answer.toString()) ? "yes" : ((resp !== null) ? "no" : null));
    corr = ((resp === correct_answer.toString()) ? "1" : ((resp !== null) ? "0" : null));
    trialLoop.addData("valid_rt", response_time);
    trialLoop.addData("valid_resp", resp);
    trialLoop.addData("valid_mouse_key_resp", mouse_response);
    trialLoop.addData("valid_is_correct?", corr_text);
    trialLoop.addData("valid_accuracy", corr);
    
    if (routineForceEnded) {
        routineTimer.reset();} else if (Particpant_ResponseMaxDurationReached) {
        Particpant_ResponseClock.add(Particpant_ResponseMaxDuration);
    } else {
        Particpant_ResponseClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

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
    routineTimer.add(18.000000);
    Fixation_CrossMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from fixationScript
    if (((blockLoop.thisN === 1) || (blockLoop.thisN === 3))) {
        continueRoutine = false;
    } else {
        continueRoutine = true;
    }
    
    psychoJS.experiment.addData('Fixation_Cross.started', globalClock.getTime());
    Fixation_CrossMaxDuration = null
    // keep track of which components have finished
    Fixation_CrossComponents = [];
    Fixation_CrossComponents.push(text);
    
    Fixation_CrossComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    
    frameRemains = 0.0 + 18 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
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
    Fixation_CrossComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Fixation_CrossRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Fixation_Cross' ---
    Fixation_CrossComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Fixation_Cross.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (Fixation_CrossMaxDurationReached) {
        Fixation_CrossClock.add(Fixation_CrossMaxDuration);
    } else {
        Fixation_CrossClock.add(18.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

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
    if ((blockLoop.thisN === 1)) {
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
    
    Midpoint_BreakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    Midpoint_BreakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    Midpoint_BreakComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    # Record data to CSV
    
    
    //extract result from experiment
    let dataObj = psychoJS._experiment._trialsData;
    const fields = ['participant_id','Block','correct_answer','Stimuli_Type','Stimuli','One_subsubj_two_subObj','valid_rt',' valid_resp', 'valid_is_correct?','valid_accuracy','valid_mouse_key_resp','Trial.started','Trial.stopped','Start_Task_Routine.started','Start_Task_Routine.stopped','early_rt','early_resp','early_mouse_key_resp','early_accuracy','early_is_correct?'];
    
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
    
    End_Task_RoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    End_Task_RoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    End_Task_RoutineComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
