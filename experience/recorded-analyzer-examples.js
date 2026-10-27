// Saved Qwen2.5-3B training rollouts (steps 151, 154, 158).
// Actions, post-action observations, target_steps, error_reason, and skill match the server records.
// Step indices are zero-based, as in the training logs. The terminal reward line is derived from episode_reward.
export default {
  "success": {
    "source": {
      "model": "Qwen2.5-3B",
      "training_step": 151,
      "trajectory_id": "fc83f088-b3dc-444c-830e-f95a7c78bf5a",
      "split": "train",
      "run": "gatetanh_c1_step_skill_none_length_pairwise"
    },
    "goal": "heat some cup and put it in fridge",
    "outcome": true,
    "reward": 10.0,
    "actions": [
      "go to diningtable 1",
      "go to countertop 1",
      "go to countertop 2",
      "go to diningtable 1",
      "go to stoveburner 1",
      "go to fridge 1",
      "open fridge 1",
      "take cup 1 from fridge 1",
      "go to microwave 1",
      "heat cup 1 with microwave 1",
      "go to fridge 1",
      "move cup 1 to fridge 1"
    ],
    "feedback": [
      "You arrive at diningtable 1. On the diningtable 1, you see a apple 1, a bowl 1, a bread 1, a dishsponge 3, a egg 3, a egg 2, a houseplant 1, a potato 3, and a spoon 2.",
      "You arrive at countertop 1. On the countertop 1, you see a saltshaker 2.",
      "You arrive at countertop 2. On the countertop 2, you see a butterknife 1, a dishsponge 1, a fork 1, a kettle 1, a papertowelroll 1, a saltshaker 3, a spatula 3, and a tomato 1.",
      "You arrive at diningtable 1. On the diningtable 1, you see a apple 1, a bowl 1, a bread 1, a dishsponge 3, a egg 3, a egg 2, a houseplant 1, a potato 3, and a spoon 2.",
      "You arrive at stoveburner 1. On the stoveburner 1, you see a pot 1.",
      "You arrive at fridge 1. The fridge 1 is closed.",
      "You open the fridge 1. The fridge 1 is open. In it, you see a cup 1, a potato 2, and a potato 1.",
      "You pick up the cup 1 from the fridge 1.",
      "You arrive at microwave 1. The microwave 1 is closed.",
      "You heat the cup 1 using the microwave 1.",
      "You arrive at fridge 1. The fridge 1 is open. In it, you see a potato 2, and a potato 1.",
      "Rollout ended · episode reward 10.0"
    ],
    "skills": [
      {
        "target_steps": [
          3,
          4
        ],
        "error_reason": "At steps 3 and 4 the agent returned to the diningtable—already visited—and to stoveburner—irrelevant to finding a cup—instead of systematically checking unvisited locations like remaining cabinets or drawers on countertops.",
        "skill": "After visiting a location and finding no target object, do not revisit it; instead proceed to check unvisited receptacles systematically, prioritizing containers rather than surfaces.",
        "evidence_steps": []
      }
    ]
  },
  "failure": {
    "source": {
      "model": "Qwen2.5-3B",
      "training_step": 154,
      "trajectory_id": "2b134559-ce1c-4ece-8024-a1515ad03cc6",
      "split": "train",
      "run": "gatetanh_c1_step_skill_none_length_pairwise"
    },
    "goal": "put a hot mug in coffeemachine",
    "outcome": false,
    "reward": 0.0,
    "actions": [
      "go to countertop 1",
      "go to countertop 2",
      "go to countertop 3",
      "go to countertop 4",
      "go to stoveburner 1",
      "go to fridge 1",
      "open fridge 1",
      "take mug 1 from fridge 1",
      "go to coffeemachine 1",
      "move mug 1 to coffeemachine 1",
      "go to microwave 1",
      "open microwave 1",
      "close microwave 1",
      "go to microwave 1",
      "go to microwave 1",
      "inventory",
      "go to countertop 1",
      "go to stoveburner 1",
      "go to microwave 1",
      "open microwave 1",
      "go to fridge 1",
      "go to stoveburner 2",
      "go to stoveburner 3",
      "go to stoveburner 4",
      "go to countertop 1",
      "go to microwave 1",
      "go to coffeemachine 1",
      "take mug 1 from coffeemachine 1",
      "go to microwave 1",
      "move mug 1 to microwave 1"
    ],
    "feedback": [
      "You arrive at countertop 1. On the countertop 1, you see a fork 1, and a houseplant 1.",
      "You arrive at countertop 2. On the countertop 2, you see a butterknife 1, a fork 2, a knife 2, a knife 1, a ladle 2, and a pot 1.",
      "You arrive at countertop 3. On the countertop 3, you see a apple 2, a butterknife 2, a lettuce 1, a pan 1, a peppershaker 1, a saltshaker 2, a spatula 2, and a tomato 2.",
      "You arrive at countertop 4. On the countertop 4, you see a bread 2, a bread 1, a cup 3, a egg 2, a peppershaker 2, and a potato 2.",
      "You arrive at stoveburner 1. On the stoveburner 1, you see nothing.",
      "You arrive at fridge 1. The fridge 1 is closed.",
      "You open the fridge 1. The fridge 1 is open. In it, you see a apple 1, a cup 2, a cup 1, a mug 1, a potato 1, and a tomato 1.",
      "You pick up the mug 1 from the fridge 1.",
      "You arrive at coffeemachine 1. On the coffeemachine 1, you see nothing.",
      "You move the mug 1 to the coffeemachine 1.",
      "You arrive at microwave 1. The microwave 1 is closed.",
      "You open the microwave 1. The microwave 1 is open. In it, you see nothing.",
      "You close the microwave 1.",
      "Nothing happens.",
      "Nothing happens.",
      "You are not carrying anything.",
      "You arrive at countertop 1. On the countertop 1, you see a fork 1, and a houseplant 1.",
      "You arrive at stoveburner 1. On the stoveburner 1, you see nothing.",
      "You arrive at microwave 1. The microwave 1 is closed.",
      "You open the microwave 1. The microwave 1 is open. In it, you see nothing.",
      "You arrive at fridge 1. The fridge 1 is open. In it, you see a apple 1, a cup 2, a cup 1, a potato 1, and a tomato 1.",
      "You arrive at stoveburner 2. On the stoveburner 2, you see nothing.",
      "You arrive at stoveburner 3. On the stoveburner 3, you see a pot 2.",
      "You arrive at stoveburner 4. On the stoveburner 4, you see a kettle 1.",
      "You arrive at countertop 1. On the countertop 1, you see a fork 1, and a houseplant 1.",
      "You arrive at microwave 1. The microwave 1 is open. In it, you see nothing.",
      "You arrive at coffeemachine 1. On the coffeemachine 1, you see a mug 1.",
      "You pick up the mug 1 from the coffeemachine 1.",
      "You arrive at microwave 1. The microwave 1 is open. In it, you see nothing.",
      "Rollout ended · episode reward 0.0"
    ],
    "skills": [
      {
        "target_steps": [
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18
        ],
        "error_reason": "At steps 9-18 the agent placed the mug on the coffeemachine without first heating it, then wandered around searching for the microwave while carrying nothing, ultimately failing to complete the task of placing a HOT mug on the coffeemachine.",
        "skill": "When a task requires an object to be in a specific state (e.g., hot, clean, sliced), process the object through the appropriate state-changing appliance (e.g., microwave, sinkbasin) before delivering it to the destination, and verify the object is in the correct state before placing it.",
        "evidence_steps": []
      }
    ]
  },
  "clean": {
    "source": {
      "model": "Qwen2.5-3B",
      "training_step": 158,
      "trajectory_id": "feb74e5e-c1b0-4a6c-bf0a-53a3e5f68a32",
      "split": "train",
      "run": "gatetanh_c1_step_skill_none_length_pairwise"
    },
    "goal": "cool some pot and put it in shelf",
    "outcome": true,
    "reward": 10.0,
    "actions": [
      "go to stoveburner 1",
      "take pot 1 from stoveburner 1",
      "go to fridge 1",
      "cool pot 1 with fridge 1",
      "go to shelf 1",
      "move pot 1 to shelf 1"
    ],
    "feedback": [
      "You arrive at stoveburner 1. On the stoveburner 1, you see a pot 1.",
      "You pick up the pot 1 from the stoveburner 1.",
      "You arrive at fridge 1. The fridge 1 is closed.",
      "You cool the pot 1 using the fridge 1.",
      "You arrive at shelf 1. On the shelf 1, you see a cup 1, and a soapbottle 1.",
      "Rollout ended · episode reward 10.0"
    ],
    "skills": []
  }
};
