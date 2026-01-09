### **Sentence Judgment Task (fMRI)**



#### Overview



This experiment is a "*sentence judgment task"* designed for use in an fMRI environment. Participants are presented with sentences and must judge whether each sentence is **"True"** or **"False**". Sentences vary by type, including "literally true", "literally false" and "metaphorical" sentences





#### Task Structure

##### **Blocks**

* Total blocks: 10
* Sentences per block: 16
* Block duration: 96 seconds (1 min 36 sec)



**Block Timing**

Each block is followed by an 18-second fixation cross(12 TRs).



The experiment is divided into two phases:

* First phase: 5 blocks
* Mid-experiment break: To make sure Participants are awake
* Second phase: 5 blocks





##### **Trial Structure**

Total trial duration: 6 seconds (4 TRs)



**Sentence presentation:**

* 6 words per sentence
* 3 seconds (2 TRs)



**Response window:**

* 3 seconds (2 TRs)



After 6 seconds, the next sentence (trial) begins automatically.





##### **Participant Responses**

Participants respond by selecting:

* True
* False



**Button Mapping (Counterbalancing)**

* For half of participants(TF):

   	True = Left

   	False = Right

* For the other half(FT):

  	False = Left

  	True = Right



*This is implemented by:*

experimenter is prompted to either choose the options "TF" or "FT" before task begins





##### **Sentence Composition per Block**

Each block contains:

*  8 Literally True sentences  (meaningful sentences)
*  4 Literally False sentences (looks like a sentence but makes no sense)
*  4 Metaphorical sentences     (metaphors)



#### **Randomization**



1\. **Block Order Randomization**

   All 10 blocks are randomized per participant.

   Each participant sees a unique block order.



2\. **Within-Block Randomization**

   Sentences within each block are randomized independently for each participant.





##### **Timing Summary**



* 5 blocks: 480 seconds
* 4 fixation crosses: 72 seconds
* *----Break--------*
* 5 blocks: 480 seconds
* 4 fixation crosses: 72 seconds



**Total experiment duration:**

* 1104 seconds (18 minutes 24 seconds)





#### Stimuli File Structure



File name: "sentence\_judgement\_stimuli.xlsx"



**Spreadsheet Structure**



| Column | Description                                                      |

| ------ | ---------------------------------------------------------------- |

| A | Sentence type ('Literally True', 'Literally False', 'Metaphors') |



**Block Layout**

Each block consists of three columns:

1\. Stimulus column(sentences)

2\. Subect\_Object change column (creation or manipulation metadata; must be logged)

3\. Empty column (separator before next block)



| Block    | Stimulus | Object Column | Empty |

| -------- | -------- | ------------- | ----- |

| Block 1  | B        | C             | D     |

| Block 2  | E        | F             | G     |

| Block 3  | H        | I             | J     |

| Block 4  | K        | L             | M     |

| Block 5  | N        | O             | P     |

| Block 6  | Q        | R             | S     |

| Block 7  | T        | U             | V     |

| Block 8  | W        | X             | Y     |

| Block 9  | Z        | AA            | AB    |

| Block 10 | AC       | AD            | AE    |



---



#### Script File

File name: "sentence\_judgement\_task.py"



To run:

1. Install psychopy
2. Have an fmri scanner the scanner accepts 't'



Notes:

TR values assume 1.5 s per TR.





#### Log File Requirements



The following information must be recorded for each trial:



1\. Sentence type(from Column A)

2\. Stimulus text (from the block-specific stimulus column)

3\. subject\_Object change information (from the associated subject\_object column)

4\. Participant response ('True' or 'False')

5\. Accuracy (correct / incorrect)

6\. Response time (RT)

