#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2025.1.1),
    on January 09, 2026, at 15:02
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout, hardware
from psychopy.tools import environmenttools
from psychopy.constants import (
    NOT_STARTED, STARTED, PLAYING, PAUSED, STOPPED, STOPPING, FINISHED, PRESSED, 
    RELEASED, FOREVER, priority
)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# create a device manager to handle hardware (keyboards, mice, mirophones, speakers, etc.)
deviceManager = hardware.DeviceManager()
# ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# store info about the experiment session
psychopyVersion = '2025.1.1'
expName = 'SentenceDecisionTask'  # from the Builder filename that created this script
expVersion = 'v2'
# a list of functions to run when the experiment ends (starts off blank)
runAtExit = []
# information about this experiment
expInfo = {
    'participant_id': f"{randint(0, 999999):06.0f}",
    'tf_mapping': ['TrueFalse', 'FalseTrue'],
    'date|hid': data.getDateStr(),
    'expName|hid': expName,
    'expVersion|hid': expVersion,
    'psychopyVersion|hid': psychopyVersion,
}

# --- Define some variables which will change depending on pilot mode ---
'''
To run in pilot mode, either use the run/pilot toggle in Builder, Coder and Runner, 
or run the experiment with `--pilot` as an argument. To change what pilot 
#mode does, check out the 'Pilot mode' tab in preferences.
'''
# work out from system args whether we are running in pilot mode
PILOTING = core.setPilotModeFromArgs()
# start off with values from experiment settings
_fullScr = True
_winSize = [1536, 864]
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
        # set window size
        _winSize = prefs.piloting['forcedWindowSize']

def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # show participant info dialog
    dlg = gui.DlgFromDict(
        dictionary=expInfo, sortKeys=False, title=expName, alwaysOnTop=True
    )
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    # remove dialog-specific syntax from expInfo
    for key, val in expInfo.copy().items():
        newKey, _ = data.utils.parsePipeSyntax(key)
        expInfo[newKey] = expInfo.pop(key)
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s_%s' % (expInfo['participant_id'],expName,expInfo["tf_mapping"],expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version=expVersion,
        extraInfo=expInfo, runtimeInfo=None,
        originPath='C:\\Users\\Frances\\Desktop\\sdt\\SentenceDecisionTask_lastrun.py',
        savePickle=True, saveWideText=False,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # set how much information should be printed to the console / app
    if PILOTING:
        logging.console.setLevel(
            prefs.piloting['pilotConsoleLoggingLevel']
        )
    else:
        logging.console.setLevel('warning')


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if PILOTING:
        logging.debug('Fullscreen settings ignored as running in pilot mode.')
    
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=_winSize, fullscr=_fullScr, screen=0,
            winType='pyglet', allowGUI=False, allowStencil=False,
            monitor='testMonitor', color=[0.9216, 0.9216, 0.9216], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height',
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [0.9216, 0.9216, 0.9216]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    if expInfo is not None:
        # get/measure frame rate if not already in expInfo
        if win._monitorFrameRate is None:
            win._monitorFrameRate = win.getActualFrameRate(infoMsg='Attempting to measure frame rate of screen, please wait...')
        expInfo['frameRate'] = win._monitorFrameRate
    win.hideMessage()
    if PILOTING:
        # show a visual indicator if we're in piloting mode
        if prefs.piloting['showPilotingIndicator']:
            win.showPilotingIndicator()
        # always show the mouse in piloting mode
        if prefs.piloting['forceMouseVisible']:
            win.mouseVisible = True
    
    return win


def setupDevices(expInfo, thisExp, win):
    """
    Setup whatever devices are available (mouse, keyboard, speaker, eyetracker, etc.) and add them to 
    the device manager (deviceManager)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    bool
        True if completed successfully.
    """
    # --- Setup input devices ---
    ioConfig = {}
    ioSession = ioServer = eyetracker = None
    
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='ptb'
        )
    if deviceManager.getDevice('StartKeyboard') is None:
        # initialise StartKeyboard
        StartKeyboard = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='StartKeyboard',
        )
    if deviceManager.getDevice('breakKeyPress') is None:
        # initialise breakKeyPress
        breakKeyPress = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='breakKeyPress',
        )
    if deviceManager.getDevice('endKeyPress') is None:
        # initialise endKeyPress
        endKeyPress = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='endKeyPress',
        )
    # return True if completed successfully
    return True

def pauseExperiment(thisExp, win=None, timers=[], currentRoutine=None):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    currentRoutine : psychopy.data.Routine
        Current Routine we are in at time of pausing, if any. This object tells PsychoPy what Components to pause/play/dispatch.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # start a timer to figure out how long we're paused for
    pauseTimer = core.Clock()
    # pause any playback components
    if currentRoutine is not None:
        for comp in currentRoutine.getPlaybackComponents():
            comp.pause()
    # make sure we have a keyboard
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        defaultKeyboard = deviceManager.addKeyboard(
            deviceClass='keyboard',
            deviceName='defaultKeyboard',
            backend='PsychToolbox',
        )
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win)
        # dispatch messages on response components
        if currentRoutine is not None:
            for comp in currentRoutine.getDispatchComponents():
                comp.device.dispatchMessages()
        # sleep 1ms so other threads can execute
        clock.time.sleep(0.001)
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    if currentRoutine is not None:
        for comp in currentRoutine.getPlaybackComponents():
            comp.play()
    # reset any timers
    for timer in timers:
        timer.addTime(-pauseTimer.getTime())


def run(expInfo, thisExp, win, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # make sure window is set to foreground to prevent losing focus
    win.winHandle.activate()
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = deviceManager.ioServer
    # get/create a default keyboard (e.g. to check for escape)
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='PsychToolbox'
        )
    eyetracker = deviceManager.getDevice('eyetracker')
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "Start_Task_Routine" ---
    # Run 'Begin Experiment' code from mouseMappingScript
    if expInfo["tf_mapping"] == 'TrueFalse':
        left = 'True'
        right = 'False'
       
    else:
        left = 'False'
        right ='True'
        
    dynamic_text = f"Judge whether each sentence is literally true or false\n\nLeft mouse click = {left}\nRight mouse click = {right}\n\nPress spacebar to begin."
    left_response = f"Left mouse click = {left}"
    right_response = f"Right mouse click = {right}"
    
    InstructionText = visual.TextStim(win=win, name='InstructionText',
        text=dynamic_text,
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    StartKeyboard = keyboard.Keyboard(deviceName='StartKeyboard')
    
    # --- Initialize components for Routine "Word_Setup" ---
    
    # --- Initialize components for Routine "RSVP" ---
    StimuliText = visual.TextStim(win=win, name='StimuliText',
        text='',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    LeftResponseInstruction = visual.TextStim(win=win, name='LeftResponseInstruction',
        text=left_response,
        font='Arial',
        pos=(-0.4, -0.3), draggable=False, height=0.035, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    rightResponseInstruction = visual.TextStim(win=win, name='rightResponseInstruction',
        text=right_response,
        font='Arial',
        pos=(0.4, -0.3), draggable=False, height=0.035, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    earlyMouseClick = event.Mouse(win=win)
    x, y = [None, None]
    earlyMouseClick.mouseClock = core.Clock()
    
    # --- Initialize components for Routine "Particpant_Response" ---
    validMouseClick = event.Mouse(win=win)
    x, y = [None, None]
    validMouseClick.mouseClock = core.Clock()
    responsefixationCross = visual.TextStim(win=win, name='responsefixationCross',
        text='',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.08, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    LeftResponseInstruction_2 = visual.TextStim(win=win, name='LeftResponseInstruction_2',
        text=left_response,
        font='Arial',
        pos=(-0.4, -0.3), draggable=False, height=0.035, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    rightResponseInstruction_2 = visual.TextStim(win=win, name='rightResponseInstruction_2',
        text=right_response,
        font='Arial',
        pos=(0.4, -0.3), draggable=False, height=0.035, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    
    # --- Initialize components for Routine "Fixation_Cross" ---
    text = visual.TextStim(win=win, name='text',
        text='+',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.08, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "Midpoint_Break" ---
    Instruction_Break = visual.TextStim(win=win, name='Instruction_Break',
        text="You have completed the first run of the task.\nPress the 'spacebar' key to resume.",
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    breakKeyPress = keyboard.Keyboard(deviceName='breakKeyPress')
    
    # --- Initialize components for Routine "End_Task_Routine" ---
    Instruction_Exit = visual.TextStim(win=win, name='Instruction_Exit',
        text='You have now completed the task.  \n\nThank you for your participation!  \n\nYou may now close the experiment. Press the "x\' key to exit.',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    endKeyPress = keyboard.Keyboard(deviceName='endKeyPress')
    
    # create some handy timers
    
    # global clock to track the time since experiment started
    if globalClock is None:
        # create a clock if not given one
        globalClock = core.Clock()
    if isinstance(globalClock, str):
        # if given a string, make a clock accoridng to it
        if globalClock == 'float':
            # get timestamps as a simple value
            globalClock = core.Clock(format='float')
        elif globalClock == 'iso':
            # get timestamps in ISO format
            globalClock = core.Clock(format='%Y-%m-%d_%H:%M:%S.%f%z')
        else:
            # get timestamps in a custom format
            globalClock = core.Clock(format=globalClock)
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    # routine timer to track time remaining of each (possibly non-slip) routine
    routineTimer = core.Clock()
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(
        format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6
    )
    
    # --- Prepare to start Routine "Start_Task_Routine" ---
    # create an object to store info about Routine Start_Task_Routine
    Start_Task_Routine = data.Routine(
        name='Start_Task_Routine',
        components=[InstructionText, StartKeyboard],
    )
    Start_Task_Routine.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for StartKeyboard
    StartKeyboard.keys = []
    StartKeyboard.rt = []
    _StartKeyboard_allKeys = []
    # store start times for Start_Task_Routine
    Start_Task_Routine.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    Start_Task_Routine.tStart = globalClock.getTime(format='float')
    Start_Task_Routine.status = STARTED
    thisExp.addData('Start_Task_Routine.started', Start_Task_Routine.tStart)
    Start_Task_Routine.maxDuration = None
    # keep track of which components have finished
    Start_Task_RoutineComponents = Start_Task_Routine.components
    for thisComponent in Start_Task_Routine.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "Start_Task_Routine" ---
    Start_Task_Routine.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *InstructionText* updates
        
        # if InstructionText is starting this frame...
        if InstructionText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            InstructionText.frameNStart = frameN  # exact frame index
            InstructionText.tStart = t  # local t and not account for scr refresh
            InstructionText.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(InstructionText, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'InstructionText.started')
            # update status
            InstructionText.status = STARTED
            InstructionText.setAutoDraw(True)
        
        # if InstructionText is active this frame...
        if InstructionText.status == STARTED:
            # update params
            pass
        
        # *StartKeyboard* updates
        waitOnFlip = False
        
        # if StartKeyboard is starting this frame...
        if StartKeyboard.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            StartKeyboard.frameNStart = frameN  # exact frame index
            StartKeyboard.tStart = t  # local t and not account for scr refresh
            StartKeyboard.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(StartKeyboard, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'StartKeyboard.started')
            # update status
            StartKeyboard.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(StartKeyboard.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(StartKeyboard.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if StartKeyboard.status == STARTED and not waitOnFlip:
            theseKeys = StartKeyboard.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _StartKeyboard_allKeys.extend(theseKeys)
            if len(_StartKeyboard_allKeys):
                StartKeyboard.keys = _StartKeyboard_allKeys[-1].name  # just the last key pressed
                StartKeyboard.rt = _StartKeyboard_allKeys[-1].rt
                StartKeyboard.duration = _StartKeyboard_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=Start_Task_Routine,
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            Start_Task_Routine.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Start_Task_Routine.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Start_Task_Routine" ---
    for thisComponent in Start_Task_Routine.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for Start_Task_Routine
    Start_Task_Routine.tStop = globalClock.getTime(format='float')
    Start_Task_Routine.tStopRefresh = tThisFlipGlobal
    thisExp.addData('Start_Task_Routine.stopped', Start_Task_Routine.tStop)
    # check responses
    if StartKeyboard.keys in ['', [], None]:  # No response was made
        StartKeyboard.keys = None
    thisExp.addData('StartKeyboard.keys',StartKeyboard.keys)
    if StartKeyboard.keys != None:  # we had a response
        thisExp.addData('StartKeyboard.rt', StartKeyboard.rt)
        thisExp.addData('StartKeyboard.duration', StartKeyboard.duration)
    thisExp.nextEntry()
    # the Routine "Start_Task_Routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    blockLoop = data.TrialHandler2(
        name='blockLoop',
        nReps=1.0, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions('experiment_stimuli/chooseBlocksTest.xlsx'), 
        seed=None, 
    )
    thisExp.addLoop(blockLoop)  # add the loop to the experiment
    thisBlockLoop = blockLoop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisBlockLoop.rgb)
    if thisBlockLoop != None:
        for paramName in thisBlockLoop:
            globals()[paramName] = thisBlockLoop[paramName]
    
    for thisBlockLoop in blockLoop:
        blockLoop.status = STARTED
        if hasattr(thisBlockLoop, 'status'):
            thisBlockLoop.status = STARTED
        currentLoop = blockLoop
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        # abbreviate parameter names if possible (e.g. rgb = thisBlockLoop.rgb)
        if thisBlockLoop != None:
            for paramName in thisBlockLoop:
                globals()[paramName] = thisBlockLoop[paramName]
        
        # set up handler to look after randomisation of conditions etc
        trialLoop = data.TrialHandler2(
            name='trialLoop',
            nReps=1.0, 
            method='random', 
            extraInfo=expInfo, 
            originPath=-1, 
            trialList=data.importConditions('experiment_stimuli/' + condsFile), 
            seed=None, 
        )
        thisExp.addLoop(trialLoop)  # add the loop to the experiment
        thisTrialLoop = trialLoop.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisTrialLoop.rgb)
        if thisTrialLoop != None:
            for paramName in thisTrialLoop:
                globals()[paramName] = thisTrialLoop[paramName]
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        
        for thisTrialLoop in trialLoop:
            trialLoop.status = STARTED
            if hasattr(thisTrialLoop, 'status'):
                thisTrialLoop.status = STARTED
            currentLoop = trialLoop
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
            # abbreviate parameter names if possible (e.g. rgb = thisTrialLoop.rgb)
            if thisTrialLoop != None:
                for paramName in thisTrialLoop:
                    globals()[paramName] = thisTrialLoop[paramName]
            
            # --- Prepare to start Routine "Word_Setup" ---
            # create an object to store info about Routine Word_Setup
            Word_Setup = data.Routine(
                name='Word_Setup',
                components=[],
            )
            Word_Setup.status = NOT_STARTED
            continueRoutine = True
            # update component parameters for each repeat
            # Run 'Begin Routine' code from wordExtractionScript
            words = Stimuli.split(' ')
            print(words)
            
            
            # store start times for Word_Setup
            Word_Setup.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
            Word_Setup.tStart = globalClock.getTime(format='float')
            Word_Setup.status = STARTED
            thisExp.addData('Word_Setup.started', Word_Setup.tStart)
            Word_Setup.maxDuration = None
            # keep track of which components have finished
            Word_SetupComponents = Word_Setup.components
            for thisComponent in Word_Setup.components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "Word_Setup" ---
            Word_Setup.forceEnded = routineForceEnded = not continueRoutine
            while continueRoutine:
                # if trial has changed, end Routine now
                if hasattr(thisTrialLoop, 'status') and thisTrialLoop.status == STOPPING:
                    continueRoutine = False
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                # pause experiment here if requested
                if thisExp.status == PAUSED:
                    pauseExperiment(
                        thisExp=thisExp, 
                        win=win, 
                        timers=[routineTimer, globalClock], 
                        currentRoutine=Word_Setup,
                    )
                    # skip the frame we paused on
                    continue
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    Word_Setup.forceEnded = routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in Word_Setup.components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "Word_Setup" ---
            for thisComponent in Word_Setup.components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # store stop times for Word_Setup
            Word_Setup.tStop = globalClock.getTime(format='float')
            Word_Setup.tStopRefresh = tThisFlipGlobal
            thisExp.addData('Word_Setup.stopped', Word_Setup.tStop)
            # the Routine "Word_Setup" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "RSVP" ---
            # create an object to store info about Routine RSVP
            RSVP = data.Routine(
                name='RSVP',
                components=[StimuliText, LeftResponseInstruction, rightResponseInstruction, earlyMouseClick],
            )
            RSVP.status = NOT_STARTED
            continueRoutine = True
            # update component parameters for each repeat
            # Run 'Begin Routine' code from currentWordScript
            wordIndex = 0          
            nextWordTime = 0    
            currentWord = words[wordIndex]
            
                 
            
            # setup some python lists for storing info about the earlyMouseClick
            gotValidClick = False  # until a click is received
            earlyMouseClick.mouseClock.reset()
            # Run 'Begin Routine' code from storeEarlyMouseClick
            clicked = False
            early_response_time=[]
            early_response= ''
            mouse_response =''
            
            
            # store start times for RSVP
            RSVP.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
            RSVP.tStart = globalClock.getTime(format='float')
            RSVP.status = STARTED
            thisExp.addData('RSVP.started', RSVP.tStart)
            RSVP.maxDuration = None
            # keep track of which components have finished
            RSVPComponents = RSVP.components
            for thisComponent in RSVP.components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "RSVP" ---
            RSVP.forceEnded = routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 3.0:
                # if trial has changed, end Routine now
                if hasattr(thisTrialLoop, 'status') and thisTrialLoop.status == STOPPING:
                    continueRoutine = False
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                # Run 'Each Frame' code from currentWordScript
                if wordIndex < len(words) - 1:
                    if t >= nextWordTime + 0.5:      
                        wordIndex += 1
                        currentWord= words[wordIndex]
                        nextWordTime = t  
                
                # *StimuliText* updates
                
                # if StimuliText is starting this frame...
                if StimuliText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    StimuliText.frameNStart = frameN  # exact frame index
                    StimuliText.tStart = t  # local t and not account for scr refresh
                    StimuliText.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(StimuliText, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    StimuliText.status = STARTED
                    StimuliText.setAutoDraw(True)
                
                # if StimuliText is active this frame...
                if StimuliText.status == STARTED:
                    # update params
                    StimuliText.setText(currentWord
                    , log=False)
                
                # if StimuliText is stopping this frame...
                if StimuliText.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > StimuliText.tStartRefresh + 3-frameTolerance:
                        # keep track of stop time/frame for later
                        StimuliText.tStop = t  # not accounting for scr refresh
                        StimuliText.tStopRefresh = tThisFlipGlobal  # on global time
                        StimuliText.frameNStop = frameN  # exact frame index
                        # update status
                        StimuliText.status = FINISHED
                        StimuliText.setAutoDraw(False)
                
                # *LeftResponseInstruction* updates
                
                # if LeftResponseInstruction is starting this frame...
                if LeftResponseInstruction.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    LeftResponseInstruction.frameNStart = frameN  # exact frame index
                    LeftResponseInstruction.tStart = t  # local t and not account for scr refresh
                    LeftResponseInstruction.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(LeftResponseInstruction, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    LeftResponseInstruction.status = STARTED
                    LeftResponseInstruction.setAutoDraw(True)
                
                # if LeftResponseInstruction is active this frame...
                if LeftResponseInstruction.status == STARTED:
                    # update params
                    pass
                
                # if LeftResponseInstruction is stopping this frame...
                if LeftResponseInstruction.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > LeftResponseInstruction.tStartRefresh + 3-frameTolerance:
                        # keep track of stop time/frame for later
                        LeftResponseInstruction.tStop = t  # not accounting for scr refresh
                        LeftResponseInstruction.tStopRefresh = tThisFlipGlobal  # on global time
                        LeftResponseInstruction.frameNStop = frameN  # exact frame index
                        # update status
                        LeftResponseInstruction.status = FINISHED
                        LeftResponseInstruction.setAutoDraw(False)
                
                # *rightResponseInstruction* updates
                
                # if rightResponseInstruction is starting this frame...
                if rightResponseInstruction.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    rightResponseInstruction.frameNStart = frameN  # exact frame index
                    rightResponseInstruction.tStart = t  # local t and not account for scr refresh
                    rightResponseInstruction.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(rightResponseInstruction, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    rightResponseInstruction.status = STARTED
                    rightResponseInstruction.setAutoDraw(True)
                
                # if rightResponseInstruction is active this frame...
                if rightResponseInstruction.status == STARTED:
                    # update params
                    pass
                
                # if rightResponseInstruction is stopping this frame...
                if rightResponseInstruction.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > rightResponseInstruction.tStartRefresh + 3-frameTolerance:
                        # keep track of stop time/frame for later
                        rightResponseInstruction.tStop = t  # not accounting for scr refresh
                        rightResponseInstruction.tStopRefresh = tThisFlipGlobal  # on global time
                        rightResponseInstruction.frameNStop = frameN  # exact frame index
                        # update status
                        rightResponseInstruction.status = FINISHED
                        rightResponseInstruction.setAutoDraw(False)
                # *earlyMouseClick* updates
                
                # if earlyMouseClick is starting this frame...
                if earlyMouseClick.status == NOT_STARTED and t >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    earlyMouseClick.frameNStart = frameN  # exact frame index
                    earlyMouseClick.tStart = t  # local t and not account for scr refresh
                    earlyMouseClick.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(earlyMouseClick, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    earlyMouseClick.status = STARTED
                    prevButtonState = earlyMouseClick.getPressed()  # if button is down already this ISN'T a new click
                
                # if earlyMouseClick is stopping this frame...
                if earlyMouseClick.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > earlyMouseClick.tStartRefresh + 3-frameTolerance:
                        # keep track of stop time/frame for later
                        earlyMouseClick.tStop = t  # not accounting for scr refresh
                        earlyMouseClick.tStopRefresh = tThisFlipGlobal  # on global time
                        earlyMouseClick.frameNStop = frameN  # exact frame index
                        # update status
                        earlyMouseClick.status = FINISHED
                # Run 'Each Frame' code from storeEarlyMouseClick
                buttons = earlyMouseClick.getPressed()
                if not clicked and (buttons[0] or buttons[2]):
                    clicked = True
                    early_response_time= earlyMouseClick.mouseClock.getTime()
                    if buttons[0]: 
                        early_response = left
                        mouse_response = 'left'
                        
                    elif buttons[2]:  
                        early_response = right
                        mouse_response = 'right'
                        
                
                
                       
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                # pause experiment here if requested
                if thisExp.status == PAUSED:
                    pauseExperiment(
                        thisExp=thisExp, 
                        win=win, 
                        timers=[routineTimer, globalClock], 
                        currentRoutine=RSVP,
                    )
                    # skip the frame we paused on
                    continue
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    RSVP.forceEnded = routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in RSVP.components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "RSVP" ---
            for thisComponent in RSVP.components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # store stop times for RSVP
            RSVP.tStop = globalClock.getTime(format='float')
            RSVP.tStopRefresh = tThisFlipGlobal
            thisExp.addData('RSVP.stopped', RSVP.tStop)
            # store data for trialLoop (TrialHandler)
            # Run 'End Routine' code from storeEarlyMouseClick
            # Score correctness
            corr_text = 'yes' if early_response == str(correct_answer) else 'no' if early_response is not None else None
            corr = '1' if early_response == str(correct_answer) else '0' if early_response is not None else None
            
            
            # Record data to CSV
            trialLoop.addData('early_rt', early_response_time)
            trialLoop.addData('early_resp', early_response)
            trialLoop.addData('early_mouse_key_resp', mouse_response)
            trialLoop.addData('early_is_correct?', corr_text)
            trialLoop.addData('early_accuracy', corr)
            
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if RSVP.maxDurationReached:
                routineTimer.addTime(-RSVP.maxDuration)
            elif RSVP.forceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-3.000000)
            
            # --- Prepare to start Routine "Particpant_Response" ---
            # create an object to store info about Routine Particpant_Response
            Particpant_Response = data.Routine(
                name='Particpant_Response',
                components=[validMouseClick, responsefixationCross, LeftResponseInstruction_2, rightResponseInstruction_2],
            )
            Particpant_Response.status = NOT_STARTED
            continueRoutine = True
            # update component parameters for each repeat
            # setup some python lists for storing info about the validMouseClick
            gotValidClick = False  # until a click is received
            validMouseClick.mouseClock.reset()
            # Run 'Begin Routine' code from storeValidMouseClick
            clicked = False
            response_time =[]
            resp = ''
            responsefixationCross.setColor('black')
            
            # store start times for Particpant_Response
            Particpant_Response.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
            Particpant_Response.tStart = globalClock.getTime(format='float')
            Particpant_Response.status = STARTED
            thisExp.addData('Particpant_Response.started', Particpant_Response.tStart)
            Particpant_Response.maxDuration = None
            # keep track of which components have finished
            Particpant_ResponseComponents = Particpant_Response.components
            for thisComponent in Particpant_Response.components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "Particpant_Response" ---
            Particpant_Response.forceEnded = routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 3.0:
                # if trial has changed, end Routine now
                if hasattr(thisTrialLoop, 'status') and thisTrialLoop.status == STOPPING:
                    continueRoutine = False
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                # *validMouseClick* updates
                
                # if validMouseClick is starting this frame...
                if validMouseClick.status == NOT_STARTED and t >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    validMouseClick.frameNStart = frameN  # exact frame index
                    validMouseClick.tStart = t  # local t and not account for scr refresh
                    validMouseClick.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(validMouseClick, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    validMouseClick.status = STARTED
                    prevButtonState = validMouseClick.getPressed()  # if button is down already this ISN'T a new click
                
                # if validMouseClick is stopping this frame...
                if validMouseClick.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > validMouseClick.tStartRefresh + 3.0-frameTolerance:
                        # keep track of stop time/frame for later
                        validMouseClick.tStop = t  # not accounting for scr refresh
                        validMouseClick.tStopRefresh = tThisFlipGlobal  # on global time
                        validMouseClick.frameNStop = frameN  # exact frame index
                        # update status
                        validMouseClick.status = FINISHED
                
                # *responsefixationCross* updates
                
                # if responsefixationCross is starting this frame...
                if responsefixationCross.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    responsefixationCross.frameNStart = frameN  # exact frame index
                    responsefixationCross.tStart = t  # local t and not account for scr refresh
                    responsefixationCross.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(responsefixationCross, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'responsefixationCross.started')
                    # update status
                    responsefixationCross.status = STARTED
                    responsefixationCross.setAutoDraw(True)
                
                # if responsefixationCross is active this frame...
                if responsefixationCross.status == STARTED:
                    # update params
                    responsefixationCross.setText('+', log=False)
                
                # if responsefixationCross is stopping this frame...
                if responsefixationCross.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > responsefixationCross.tStartRefresh + 3.0-frameTolerance:
                        # keep track of stop time/frame for later
                        responsefixationCross.tStop = t  # not accounting for scr refresh
                        responsefixationCross.tStopRefresh = tThisFlipGlobal  # on global time
                        responsefixationCross.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'responsefixationCross.stopped')
                        # update status
                        responsefixationCross.status = FINISHED
                        responsefixationCross.setAutoDraw(False)
                # Run 'Each Frame' code from storeValidMouseClick
                buttons = validMouseClick.getPressed()
                if not clicked and (buttons[0] or buttons[2]):
                    clicked = True
                    response_time = validMouseClick.mouseClock.getTime()
                    if buttons[0]: 
                        resp = left
                        mouse_response = 'left'
                    elif buttons[2]:  
                        resp= right  
                        mouse_response = 'right'
                    responsefixationCross.setColor('red')
                
                       
                
                # *LeftResponseInstruction_2* updates
                
                # if LeftResponseInstruction_2 is starting this frame...
                if LeftResponseInstruction_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    LeftResponseInstruction_2.frameNStart = frameN  # exact frame index
                    LeftResponseInstruction_2.tStart = t  # local t and not account for scr refresh
                    LeftResponseInstruction_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(LeftResponseInstruction_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'LeftResponseInstruction_2.started')
                    # update status
                    LeftResponseInstruction_2.status = STARTED
                    LeftResponseInstruction_2.setAutoDraw(True)
                
                # if LeftResponseInstruction_2 is active this frame...
                if LeftResponseInstruction_2.status == STARTED:
                    # update params
                    pass
                
                # if LeftResponseInstruction_2 is stopping this frame...
                if LeftResponseInstruction_2.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > LeftResponseInstruction_2.tStartRefresh + 3.0-frameTolerance:
                        # keep track of stop time/frame for later
                        LeftResponseInstruction_2.tStop = t  # not accounting for scr refresh
                        LeftResponseInstruction_2.tStopRefresh = tThisFlipGlobal  # on global time
                        LeftResponseInstruction_2.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'LeftResponseInstruction_2.stopped')
                        # update status
                        LeftResponseInstruction_2.status = FINISHED
                        LeftResponseInstruction_2.setAutoDraw(False)
                
                # *rightResponseInstruction_2* updates
                
                # if rightResponseInstruction_2 is starting this frame...
                if rightResponseInstruction_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    rightResponseInstruction_2.frameNStart = frameN  # exact frame index
                    rightResponseInstruction_2.tStart = t  # local t and not account for scr refresh
                    rightResponseInstruction_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(rightResponseInstruction_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'rightResponseInstruction_2.started')
                    # update status
                    rightResponseInstruction_2.status = STARTED
                    rightResponseInstruction_2.setAutoDraw(True)
                
                # if rightResponseInstruction_2 is active this frame...
                if rightResponseInstruction_2.status == STARTED:
                    # update params
                    pass
                
                # if rightResponseInstruction_2 is stopping this frame...
                if rightResponseInstruction_2.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > rightResponseInstruction_2.tStartRefresh + 3.0-frameTolerance:
                        # keep track of stop time/frame for later
                        rightResponseInstruction_2.tStop = t  # not accounting for scr refresh
                        rightResponseInstruction_2.tStopRefresh = tThisFlipGlobal  # on global time
                        rightResponseInstruction_2.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'rightResponseInstruction_2.stopped')
                        # update status
                        rightResponseInstruction_2.status = FINISHED
                        rightResponseInstruction_2.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                # pause experiment here if requested
                if thisExp.status == PAUSED:
                    pauseExperiment(
                        thisExp=thisExp, 
                        win=win, 
                        timers=[routineTimer, globalClock], 
                        currentRoutine=Particpant_Response,
                    )
                    # skip the frame we paused on
                    continue
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    Particpant_Response.forceEnded = routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in Particpant_Response.components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "Particpant_Response" ---
            for thisComponent in Particpant_Response.components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # store stop times for Particpant_Response
            Particpant_Response.tStop = globalClock.getTime(format='float')
            Particpant_Response.tStopRefresh = tThisFlipGlobal
            thisExp.addData('Particpant_Response.stopped', Particpant_Response.tStop)
            # store data for trialLoop (TrialHandler)
            # Run 'End Routine' code from storeValidMouseClick
            
            # Score correctness
            corr_text = 'yes' if resp == str(correct_answer) else 'no' if resp is not None else None
            corr = '1' if resp == str(correct_answer) else '0' if resp is not None else None
            print("resp", resp)
            print("correct_answer", correct_answer)
            print(resp == str(correct_answer))
            # Record data to CSV
            trialLoop.addData('valid_rt', response_time)
            trialLoop.addData('valid_resp', resp)
            trialLoop.addData('valid_mouse_key_resp', mouse_response)
            trialLoop.addData('valid_is_correct?', corr_text)
            trialLoop.addData('valid_accuracy', corr)
            
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if Particpant_Response.maxDurationReached:
                routineTimer.addTime(-Particpant_Response.maxDuration)
            elif Particpant_Response.forceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-3.000000)
            # mark thisTrialLoop as finished
            if hasattr(thisTrialLoop, 'status'):
                thisTrialLoop.status = FINISHED
            # if awaiting a pause, pause now
            if trialLoop.status == PAUSED:
                thisExp.status = PAUSED
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[globalClock], 
                )
                # once done pausing, restore running status
                trialLoop.status = STARTED
            thisExp.nextEntry()
            
        # completed 1.0 repeats of 'trialLoop'
        trialLoop.status = FINISHED
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # get names of stimulus parameters
        if trialLoop.trialList in ([], [None], None):
            params = []
        else:
            params = trialLoop.trialList[0].keys()
        # save data for this loop
        trialLoop.saveAsText(filename + '_trialLoop.csv', delim=',',
            stimOut=params,
            dataOut=['n','all_mean','all_std', 'all_raw'])
        
        # --- Prepare to start Routine "Fixation_Cross" ---
        # create an object to store info about Routine Fixation_Cross
        Fixation_Cross = data.Routine(
            name='Fixation_Cross',
            components=[text],
        )
        Fixation_Cross.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from fixationScript
        #if blockLoop.thisN == 4 or blockLoop.thisN == 9:
        if blockLoop.thisN == 1 or blockLoop.thisN == 3:
            continueRoutine = False
        else:
            continueRoutine = True
        # store start times for Fixation_Cross
        Fixation_Cross.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        Fixation_Cross.tStart = globalClock.getTime(format='float')
        Fixation_Cross.status = STARTED
        thisExp.addData('Fixation_Cross.started', Fixation_Cross.tStart)
        Fixation_Cross.maxDuration = None
        # keep track of which components have finished
        Fixation_CrossComponents = Fixation_Cross.components
        for thisComponent in Fixation_Cross.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "Fixation_Cross" ---
        Fixation_Cross.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 18.0:
            # if trial has changed, end Routine now
            if hasattr(thisBlockLoop, 'status') and thisBlockLoop.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text* updates
            
            # if text is starting this frame...
            if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text.frameNStart = frameN  # exact frame index
                text.tStart = t  # local t and not account for scr refresh
                text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text.started')
                # update status
                text.status = STARTED
                text.setAutoDraw(True)
            
            # if text is active this frame...
            if text.status == STARTED:
                # update params
                pass
            
            # if text is stopping this frame...
            if text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text.tStartRefresh + 18-frameTolerance:
                    # keep track of stop time/frame for later
                    text.tStop = t  # not accounting for scr refresh
                    text.tStopRefresh = tThisFlipGlobal  # on global time
                    text.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text.stopped')
                    # update status
                    text.status = FINISHED
                    text.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=Fixation_Cross,
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                Fixation_Cross.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in Fixation_Cross.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "Fixation_Cross" ---
        for thisComponent in Fixation_Cross.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for Fixation_Cross
        Fixation_Cross.tStop = globalClock.getTime(format='float')
        Fixation_Cross.tStopRefresh = tThisFlipGlobal
        thisExp.addData('Fixation_Cross.stopped', Fixation_Cross.tStop)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if Fixation_Cross.maxDurationReached:
            routineTimer.addTime(-Fixation_Cross.maxDuration)
        elif Fixation_Cross.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-18.000000)
        
        # --- Prepare to start Routine "Midpoint_Break" ---
        # create an object to store info about Routine Midpoint_Break
        Midpoint_Break = data.Routine(
            name='Midpoint_Break',
            components=[Instruction_Break, breakKeyPress],
        )
        Midpoint_Break.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # create starting attributes for breakKeyPress
        breakKeyPress.keys = []
        breakKeyPress.rt = []
        _breakKeyPress_allKeys = []
        # Run 'Begin Routine' code from breakScript
        #if (blockLoop.thisN == 4):
        if (blockLoop.thisN == 1):
            continueRoutine = True
        else:
            continueRoutine = False
            
        # store start times for Midpoint_Break
        Midpoint_Break.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        Midpoint_Break.tStart = globalClock.getTime(format='float')
        Midpoint_Break.status = STARTED
        thisExp.addData('Midpoint_Break.started', Midpoint_Break.tStart)
        Midpoint_Break.maxDuration = None
        # keep track of which components have finished
        Midpoint_BreakComponents = Midpoint_Break.components
        for thisComponent in Midpoint_Break.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "Midpoint_Break" ---
        Midpoint_Break.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisBlockLoop, 'status') and thisBlockLoop.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *Instruction_Break* updates
            
            # if Instruction_Break is starting this frame...
            if Instruction_Break.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Instruction_Break.frameNStart = frameN  # exact frame index
                Instruction_Break.tStart = t  # local t and not account for scr refresh
                Instruction_Break.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Instruction_Break, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'Instruction_Break.started')
                # update status
                Instruction_Break.status = STARTED
                Instruction_Break.setAutoDraw(True)
            
            # if Instruction_Break is active this frame...
            if Instruction_Break.status == STARTED:
                # update params
                pass
            
            # *breakKeyPress* updates
            waitOnFlip = False
            
            # if breakKeyPress is starting this frame...
            if breakKeyPress.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                breakKeyPress.frameNStart = frameN  # exact frame index
                breakKeyPress.tStart = t  # local t and not account for scr refresh
                breakKeyPress.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(breakKeyPress, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'breakKeyPress.started')
                # update status
                breakKeyPress.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(breakKeyPress.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(breakKeyPress.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if breakKeyPress.status == STARTED and not waitOnFlip:
                theseKeys = breakKeyPress.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _breakKeyPress_allKeys.extend(theseKeys)
                if len(_breakKeyPress_allKeys):
                    breakKeyPress.keys = _breakKeyPress_allKeys[-1].name  # just the last key pressed
                    breakKeyPress.rt = _breakKeyPress_allKeys[-1].rt
                    breakKeyPress.duration = _breakKeyPress_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=Midpoint_Break,
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                Midpoint_Break.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in Midpoint_Break.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "Midpoint_Break" ---
        for thisComponent in Midpoint_Break.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for Midpoint_Break
        Midpoint_Break.tStop = globalClock.getTime(format='float')
        Midpoint_Break.tStopRefresh = tThisFlipGlobal
        thisExp.addData('Midpoint_Break.stopped', Midpoint_Break.tStop)
        # the Routine "Midpoint_Break" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        # mark thisBlockLoop as finished
        if hasattr(thisBlockLoop, 'status'):
            thisBlockLoop.status = FINISHED
        # if awaiting a pause, pause now
        if blockLoop.status == PAUSED:
            thisExp.status = PAUSED
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[globalClock], 
            )
            # once done pausing, restore running status
            blockLoop.status = STARTED
    # completed 1.0 repeats of 'blockLoop'
    blockLoop.status = FINISHED
    
    
    # --- Prepare to start Routine "End_Task_Routine" ---
    # create an object to store info about Routine End_Task_Routine
    End_Task_Routine = data.Routine(
        name='End_Task_Routine',
        components=[Instruction_Exit, endKeyPress],
    )
    End_Task_Routine.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for endKeyPress
    endKeyPress.keys = []
    endKeyPress.rt = []
    _endKeyPress_allKeys = []
    # store start times for End_Task_Routine
    End_Task_Routine.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    End_Task_Routine.tStart = globalClock.getTime(format='float')
    End_Task_Routine.status = STARTED
    thisExp.addData('End_Task_Routine.started', End_Task_Routine.tStart)
    End_Task_Routine.maxDuration = None
    # keep track of which components have finished
    End_Task_RoutineComponents = End_Task_Routine.components
    for thisComponent in End_Task_Routine.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "End_Task_Routine" ---
    End_Task_Routine.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Instruction_Exit* updates
        
        # if Instruction_Exit is starting this frame...
        if Instruction_Exit.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Instruction_Exit.frameNStart = frameN  # exact frame index
            Instruction_Exit.tStart = t  # local t and not account for scr refresh
            Instruction_Exit.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Instruction_Exit, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Instruction_Exit.started')
            # update status
            Instruction_Exit.status = STARTED
            Instruction_Exit.setAutoDraw(True)
        
        # if Instruction_Exit is active this frame...
        if Instruction_Exit.status == STARTED:
            # update params
            pass
        
        # *endKeyPress* updates
        waitOnFlip = False
        
        # if endKeyPress is starting this frame...
        if endKeyPress.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            endKeyPress.frameNStart = frameN  # exact frame index
            endKeyPress.tStart = t  # local t and not account for scr refresh
            endKeyPress.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(endKeyPress, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'endKeyPress.started')
            # update status
            endKeyPress.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(endKeyPress.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(endKeyPress.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if endKeyPress.status == STARTED and not waitOnFlip:
            theseKeys = endKeyPress.getKeys(keyList=['x'], ignoreKeys=["escape"], waitRelease=False)
            _endKeyPress_allKeys.extend(theseKeys)
            if len(_endKeyPress_allKeys):
                endKeyPress.keys = _endKeyPress_allKeys[-1].name  # just the last key pressed
                endKeyPress.rt = _endKeyPress_allKeys[-1].rt
                endKeyPress.duration = _endKeyPress_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=End_Task_Routine,
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            End_Task_Routine.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in End_Task_Routine.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "End_Task_Routine" ---
    for thisComponent in End_Task_Routine.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for End_Task_Routine
    End_Task_Routine.tStop = globalClock.getTime(format='float')
    End_Task_Routine.tStopRefresh = tThisFlipGlobal
    thisExp.addData('End_Task_Routine.stopped', End_Task_Routine.tStop)
    # check responses
    if endKeyPress.keys in ['', [], None]:  # No response was made
        endKeyPress.keys = None
    thisExp.addData('endKeyPress.keys',endKeyPress.keys)
    if endKeyPress.keys != None:  # we had a response
        thisExp.addData('endKeyPress.rt', endKeyPress.rt)
        thisExp.addData('endKeyPress.duration', endKeyPress.duration)
    thisExp.nextEntry()
    # the Routine "End_Task_Routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # mark experiment as finished
    endExperiment(thisExp, win=win)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # return console logger level to WARNING
    logging.console.setLevel(logging.WARNING)
    # mark experiment handler as finished
    thisExp.status = FINISHED
    # run any 'at exit' functions
    for fcn in runAtExit:
        fcn()


def quit(thisExp, win=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    setupDevices(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win,
        globalClock='float'
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win)
