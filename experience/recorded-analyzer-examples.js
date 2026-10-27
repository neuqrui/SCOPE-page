// Saved Qwen2.5-3B WebShop training rollouts (steps 152, 162, 170).
// Actions, post-action observations, target_steps, error_reason, and skill match server records.
// Step indices are zero-based; the final reward line is derived from episode_reward.
export default {
  "success": {
    "source": {
      "model": "Qwen2.5-3B",
      "training_step": 162,
      "trajectory_id": "ff45affd-a2af-477a-a643-82932da25457",
      "split": "train",
      "environment": "WebShop",
      "run": "grpo_opsd_kl_qwen2.5_3b_coef0.01_sampled_kl_gatetanh_c1_step_skill_none_length_pairwise_from_sftv2-3epoch-glm2"
    },
    "goal": "Find me machine wash men's dress shirts with cotton spandex, classic fit, short sleeve with color: estate blue, and size: large, and price lower than 50.00 dollars",
    "outcome": true,
    "reward": 10.0,
    "actions": [
      "search[men's dress shirts cotton spandex classic fit short sleeve estate blue large size under $50]",
      "click[b07hrfsnl4]",
      "click[large]",
      "click[estate blue]",
      "click[buy now]"
    ],
    "feedback": [
      "'Back to Search' [SEP] 'Page 1 (Total results: 50)' [SEP] 'Next >' [SEP] 'B09QQP3356' [SEP] 'HAUKLIE Men's Sports Waffle Ribbed Polo Shirts Summer Short Sleeve Cotton Muscle Quarter-Zip Henley T-Shirt Tunics Tops' [SEP] '$10.99' [SEP] 'B07HRFSNL4' [SEP] 'Nautica Men's Solid Crew Neck Short-Sleeve Pocket T-Shirt' [SEP] '$16.05 to $40.98' [SEP] 'B09QGK5XHZ' [SEP] 'WENKOMG1 Men's Long Sleeve Undershirt with Mask Turtleneck Hooded T-Shirt Solid Color Workout Tops Zipper Side Slit Shirts Slim Fit Sweatshirt Spring/Summer Tee Shirts(Gray,)' [SEP] '$8.39' [SEP] 'B085WQKRRJ' [SEP] 'CLANMILUMS Men's Classic Comfort Soft Regular Fit Short Sleeve Henley T-Shirt Tee' [SEP] '$17.99 to $19.99' [SEP] 'B09R9YCM6R' [SEP] 'XXBR Summer T-shirts for Mens, Soldier Short Sleeve 3D Street Vintage Printed Shirt Slim Fit Muscle Casual Tee Tops' [SEP] '$8.98 to $11.99' [SEP] 'B09S3BN15C' [SEP] 'Mens Linen Shirt,Men's Striped Shirts Casual Short Sleeve Button Down Shirts Regular Fit Hawaiian Shirts Beach Tees Tops' [SEP] '$3.78 to $11.38' [SEP] 'B09NNMV9LN' [SEP] 'JSPOYOU Mens Short Sleeve Crewneck 3D Graphic Tunic Shirts Big & Tall Tie Dye Summer Top Basic Designed Classic Cotton Shirt' [SEP] '$3.99 to $10.99' [SEP] 'B09KLQLLT2' [SEP] 'Long Sleeve Superhero T Shirt Tank Top Mens Compression Shirt Men Workout Fitness Gym Shirt' [SEP] '$19.99' [SEP] 'B07JVVDJ6L' [SEP] 'Canadian Tuxedo T Shirt - Novelty Denim Tux T-Shirt' [SEP] '$19.99' [SEP] 'B07F2G93BJ' [SEP] 'Amazon Essentials Men's Slim-fit Long-Sleeve Solid Pocket Oxford Shirt' [SEP] '$18.5'",
      "'Back to Search' [SEP] '< Prev' [SEP] 'size' [SEP] 'x-small' [SEP] 'small' [SEP] 'medium' [SEP] 'large' [SEP] 'large tall' [SEP] 'x-large' [SEP] 'x-large tall' [SEP] 'xx-large' [SEP] 'xx-large tall' [SEP] '3x-large tall' [SEP] '4x-large tall' [SEP] '5x-large tall' [SEP] '1x' [SEP] '2x' [SEP] '3x' [SEP] '4x' [SEP] '5x' [SEP] '6x' [SEP] 'color' [SEP] 'navy' [SEP] 'noon blue' [SEP] 'grey heather' [SEP] 'nautica red' [SEP] 'bright white' [SEP] 'true black' [SEP] 'pale coral' [SEP] 'cradle pink' [SEP] 'bright aqua' [SEP] 'mint spring' [SEP] 'monaco blue' [SEP] 'charcoal heather (dark)' [SEP] 'barolo' [SEP] 'tidal green' [SEP] 'charcoal heather (light)' [SEP] 'estate blue' [SEP] 'patina green' [SEP] 'black' [SEP] 'bright aqua blue' [SEP] 'bright cobalt' [SEP] 'coral sands' [SEP] 'deep anchor heather' [SEP] 'hawaiian ocean' [SEP] 'melon berry' [SEP] 'pine forest green' [SEP] 'shipwreck burgundy' [SEP] 'white' [SEP] 'zest' [SEP] 'deep atlantic' [SEP] 'delft' [SEP] 'pale coral red' [SEP] 'Nautica Men's Solid Crew Neck Short-Sleeve Pocket T-Shirt' [SEP] 'Price: $16.05 to $40.98' [SEP] 'Rating: N.A.' [SEP] 'Description' [SEP] 'Features' [SEP] 'Reviews' [SEP] 'Buy Now'",
      "'Back to Search' [SEP] '< Prev' [SEP] 'size' [SEP] 'x-small' [SEP] 'small' [SEP] 'medium' [SEP] 'large' [SEP] 'large tall' [SEP] 'x-large' [SEP] 'x-large tall' [SEP] 'xx-large' [SEP] 'xx-large tall' [SEP] '3x-large tall' [SEP] '4x-large tall' [SEP] '5x-large tall' [SEP] '1x' [SEP] '2x' [SEP] '3x' [SEP] '4x' [SEP] '5x' [SEP] '6x' [SEP] 'color' [SEP] 'navy' [SEP] 'noon blue' [SEP] 'grey heather' [SEP] 'nautica red' [SEP] 'bright white' [SEP] 'true black' [SEP] 'pale coral' [SEP] 'cradle pink' [SEP] 'bright aqua' [SEP] 'mint spring' [SEP] 'monaco blue' [SEP] 'charcoal heather (dark)' [SEP] 'barolo' [SEP] 'tidal green' [SEP] 'charcoal heather (light)' [SEP] 'estate blue' [SEP] 'patina green' [SEP] 'black' [SEP] 'bright aqua blue' [SEP] 'bright cobalt' [SEP] 'coral sands' [SEP] 'deep anchor heather' [SEP] 'hawaiian ocean' [SEP] 'melon berry' [SEP] 'pine forest green' [SEP] 'shipwreck burgundy' [SEP] 'white' [SEP] 'zest' [SEP] 'deep atlantic' [SEP] 'delft' [SEP] 'pale coral red' [SEP] 'Nautica Men's Solid Crew Neck Short-Sleeve Pocket T-Shirt' [SEP] 'Price: $16.05 to $40.98' [SEP] 'Rating: N.A.' [SEP] 'Description' [SEP] 'Features' [SEP] 'Reviews' [SEP] 'Buy Now'",
      "'Back to Search' [SEP] '< Prev' [SEP] 'size' [SEP] 'x-small' [SEP] 'small' [SEP] 'medium' [SEP] 'large' [SEP] 'large tall' [SEP] 'x-large' [SEP] 'x-large tall' [SEP] 'xx-large' [SEP] 'xx-large tall' [SEP] '3x-large tall' [SEP] '4x-large tall' [SEP] '5x-large tall' [SEP] '1x' [SEP] '2x' [SEP] '3x' [SEP] '4x' [SEP] '5x' [SEP] '6x' [SEP] 'color' [SEP] 'navy' [SEP] 'noon blue' [SEP] 'grey heather' [SEP] 'nautica red' [SEP] 'bright white' [SEP] 'true black' [SEP] 'pale coral' [SEP] 'cradle pink' [SEP] 'bright aqua' [SEP] 'mint spring' [SEP] 'monaco blue' [SEP] 'charcoal heather (dark)' [SEP] 'barolo' [SEP] 'tidal green' [SEP] 'charcoal heather (light)' [SEP] 'estate blue' [SEP] 'patina green' [SEP] 'black' [SEP] 'bright aqua blue' [SEP] 'bright cobalt' [SEP] 'coral sands' [SEP] 'deep anchor heather' [SEP] 'hawaiian ocean' [SEP] 'melon berry' [SEP] 'pine forest green' [SEP] 'shipwreck burgundy' [SEP] 'white' [SEP] 'zest' [SEP] 'deep atlantic' [SEP] 'delft' [SEP] 'pale coral red' [SEP] 'Nautica Men's Solid Crew Neck Short-Sleeve Pocket T-Shirt' [SEP] 'Price: $16.05 to $40.98' [SEP] 'Rating: N.A.' [SEP] 'Description' [SEP] 'Features' [SEP] 'Reviews' [SEP] 'Buy Now'",
      "Rollout ended · episode reward 10.0"
    ],
    "skills": [
      {
        "target_steps": [
          1
        ],
        "error_reason": "Step 1 clicks on a product that is explicitly a short-sleeve t-shirt, not a dress shirt, and the search results contain no items matching the required material (cotton spandex) or fit (classic fit) criteria, so the search query was too broad and the first result was not a reasonable candidate.",
        "skill": "Before clicking into a product from search results, verify that the product title and visible attributes match the required item type and key material specifications; if no result matches, refine the search query rather than clicking the first or most popular item.",
        "evidence_steps": []
      },
      {
        "target_steps": [
          4
        ],
        "error_reason": "Step 4 clicks 'Buy Now' without confirming that the product is actually a dress shirt with cotton spandex fabric and classic fit, as the title still shows 'Crew Neck Short-Sleeve Pocket T-Shirt' and the product description would need to verify the required attributes.",
        "skill": "Before clicking buy, verify that all required attributes (item type, fabric material, fit, color, size) are confirmed in the product title, description, or features; do not purchase based on the price alone when the product does not match the required specifications.",
        "evidence_steps": []
      }
    ]
  },
  "failure": {
    "source": {
      "model": "Qwen2.5-3B",
      "training_step": 152,
      "trajectory_id": "1f31dcfb-8e64-466f-a2ae-73b925c5a297",
      "split": "train",
      "environment": "WebShop",
      "run": "grpo_opsd_kl_qwen2.5_3b_coef0.01_sampled_kl_gatetanh_c1_step_skill_none_length_pairwise_from_sftv2-3epoch-glm2"
    },
    "goal": "Find me machine wash men's dress shirts with cotton spandex, classic fit, short sleeve with color: navy, and size: small, and price lower than 40.00 dollars",
    "outcome": false,
    "reward": 0.0,
    "actions": [
      "search[dress shirts cotton spandex classic fit small navy under $40]",
      "click[b07dkgjr74]",
      "click[small]",
      "click[navy]",
      "click[buy now]"
    ],
    "feedback": [
      "'Back to Search' [SEP] 'Page 1 (Total results: 50)' [SEP] 'Next >' [SEP] 'B07DKGJR74' [SEP] 'Amazon Brand - Daily Ritual Women's 100% Cotton Oversized Fit V-Neck Pullover Sweater' [SEP] '$20.66 to $29.2' [SEP] 'B09RVF4JP1' [SEP] 'Once Upon A Time Queen Born In 1982 T Shirts It Was Me Tank Top' [SEP] '$19.99' [SEP] 'B09QQP3356' [SEP] 'HAUKLIE Men's Sports Waffle Ribbed Polo Shirts Summer Short Sleeve Cotton Muscle Quarter-Zip Henley T-Shirt Tunics Tops' [SEP] '$10.99' [SEP] 'B07F2G93BJ' [SEP] 'Amazon Essentials Men's Slim-fit Long-Sleeve Solid Pocket Oxford Shirt' [SEP] '$18.5' [SEP] 'B00ED8OH2C' [SEP] 'Propper Men's Pack 3 t-Shirt' [SEP] '$13.37 to $47.74' [SEP] 'B00V6AB796' [SEP] 'Star Vixen Women's Cold-Shoulder Top' [SEP] '$9.38 to $30.32' [SEP] 'B07HRFSNL4' [SEP] 'Nautica Men's Solid Crew Neck Short-Sleeve Pocket T-Shirt' [SEP] '$16.05 to $40.98' [SEP] 'B09PBPZ24Z' [SEP] 'myhehthw Women's High Waisted Jeans for Women Distressed Ripped Jeans Slim Fit Butt Lifting Skinny Stretch Jeans Trousers' [SEP] '$22.99 to $25.99' [SEP] 'B09QGK5XHZ' [SEP] 'WENKOMG1 Men's Long Sleeve Undershirt with Mask Turtleneck Hooded T-Shirt Solid Color Workout Tops Zipper Side Slit Shirts Slim Fit Sweatshirt Spring/Summer Tee Shirts(Gray,)' [SEP] '$8.39' [SEP] 'B09P39QN2W' [SEP] 'I Tackled 100 Day Of School Football Boy 100th Day School T-Shirt' [SEP] '$16.99'",
      "'Back to Search' [SEP] '< Prev' [SEP] 'size' [SEP] 'x-small' [SEP] 'small' [SEP] 'medium' [SEP] 'large' [SEP] 'x-large' [SEP] 'xx-large' [SEP] 'color' [SEP] 'black' [SEP] 'burgundy' [SEP] 'charcoal heather' [SEP] 'light heather grey' [SEP] 'lilac' [SEP] 'navy' [SEP] 'oatmeal heather' [SEP] 'olive' [SEP] 'white' [SEP] 'Amazon Brand - Daily Ritual Women's 100% Cotton Oversized Fit V-Neck Pullover Sweater' [SEP] 'Price: $20.66 to $29.2' [SEP] 'Rating: N.A.' [SEP] 'Description' [SEP] 'Features' [SEP] 'Reviews' [SEP] 'Buy Now'",
      "'Back to Search' [SEP] '< Prev' [SEP] 'size' [SEP] 'x-small' [SEP] 'small' [SEP] 'medium' [SEP] 'large' [SEP] 'x-large' [SEP] 'xx-large' [SEP] 'color' [SEP] 'black' [SEP] 'burgundy' [SEP] 'charcoal heather' [SEP] 'light heather grey' [SEP] 'lilac' [SEP] 'navy' [SEP] 'oatmeal heather' [SEP] 'olive' [SEP] 'white' [SEP] 'Amazon Brand - Daily Ritual Women's 100% Cotton Oversized Fit V-Neck Pullover Sweater' [SEP] 'Price: $20.66 to $29.2' [SEP] 'Rating: N.A.' [SEP] 'Description' [SEP] 'Features' [SEP] 'Reviews' [SEP] 'Buy Now'",
      "'Back to Search' [SEP] '< Prev' [SEP] 'size' [SEP] 'x-small' [SEP] 'small' [SEP] 'medium' [SEP] 'large' [SEP] 'x-large' [SEP] 'xx-large' [SEP] 'color' [SEP] 'black' [SEP] 'burgundy' [SEP] 'charcoal heather' [SEP] 'light heather grey' [SEP] 'lilac' [SEP] 'navy' [SEP] 'oatmeal heather' [SEP] 'olive' [SEP] 'white' [SEP] 'Amazon Brand - Daily Ritual Women's 100% Cotton Oversized Fit V-Neck Pullover Sweater' [SEP] 'Price: $20.66 to $29.2' [SEP] 'Rating: N.A.' [SEP] 'Description' [SEP] 'Features' [SEP] 'Reviews' [SEP] 'Buy Now'",
      "Rollout ended · episode reward 0.0"
    ],
    "skills": [
      {
        "target_steps": [
          1
        ],
        "error_reason": "The first product clicked was a women's sweater, clearly irrelevant to the required men's dress shirts with cotton spandex, classic fit, short sleeve, and navy color.",
        "skill": "When search results contain mostly irrelevant items, do not click into the first result; instead, refine the query or browse the most plausible result pages to find a better match before committing to a product.",
        "evidence_steps": []
      },
      {
        "target_steps": [
          4
        ],
        "error_reason": "The click action at step 4 attempted to buy now while the product page still displayed 'Women's' in the title, indicating the product was still not men's dress shirts as required.",
        "skill": "Before clicking buy now, verify the product title explicitly matches the required gender/category; if the title still shows a different category or gender, return to search rather than purchasing an incorrect product.",
        "evidence_steps": []
      }
    ]
  },
  "clean": {
    "source": {
      "model": "Qwen2.5-3B",
      "training_step": 170,
      "trajectory_id": "f97dc03e-58a1-49f0-9264-67cdae465b93",
      "split": "train",
      "environment": "WebShop",
      "run": "grpo_opsd_kl_qwen2.5_3b_coef0.01_sampled_kl_gatetanh_c1_step_skill_none_length_pairwise_from_sftv2-3epoch-glm2"
    },
    "goal": "Find me machine wash men's t-shirts with long sleeve with color: charcoal heather, and size: 4x-large big, and price lower than 40.00 dollars",
    "outcome": true,
    "reward": 10.0,
    "actions": [
      "search[men's long sleeve t-shirt charcoal heather 4x-large big under $40]",
      "click[b00o30jldk]",
      "click[charcoal heather]",
      "click[4x-large big]",
      "click[buy now]"
    ],
    "feedback": [
      "'Back to Search' [SEP] 'Page 1 (Total results: 50)' [SEP] 'Next >' [SEP] 'B00O30JLDK' [SEP] 'Legendary Whitetails Men's Non-Typical Long Sleeve T-Shirt' [SEP] '$10.52 to $40.5' [SEP] 'B07HRFSNL4' [SEP] 'Nautica Men's Solid Crew Neck Short-Sleeve Pocket T-Shirt' [SEP] '$16.05 to $40.98' [SEP] 'B09QGK5XHZ' [SEP] 'WENKOMG1 Men's Long Sleeve Undershirt with Mask Turtleneck Hooded T-Shirt Solid Color Workout Tops Zipper Side Slit Shirts Slim Fit Sweatshirt Spring/Summer Tee Shirts(Gray,)' [SEP] '$8.39' [SEP] 'B09QQP3356' [SEP] 'HAUKLIE Men's Sports Waffle Ribbed Polo Shirts Summer Short Sleeve Cotton Muscle Quarter-Zip Henley T-Shirt Tunics Tops' [SEP] '$10.99' [SEP] 'B078WSND96' [SEP] 'Clearance Deals Retro T-Shirt Bee Printed Blouse, 2021 Summer Fashion Boys Men 3D Round Neck Short Sleeve Tee Tops' [SEP] '$9.99 to $11.99' [SEP] 'B09Q67H373' [SEP] 'JSPOYOU 2022 Newly T-Shirt for Mens Funny 3D Graphics Pattern Crewneck Short Sleeve Tees Big and Tall Summer Casual Comfy Top' [SEP] '$1.99 to $8.99' [SEP] 'B09S3BN15C' [SEP] 'Mens Linen Shirt,Men's Striped Shirts Casual Short Sleeve Button Down Shirts Regular Fit Hawaiian Shirts Beach Tees Tops' [SEP] '$3.78 to $11.38' [SEP] 'B09RVF4JP1' [SEP] 'Once Upon A Time Queen Born In 1982 T Shirts It Was Me Tank Top' [SEP] '$19.99' [SEP] 'B09NNMV9LN' [SEP] 'JSPOYOU Mens Short Sleeve Crewneck 3D Graphic Tunic Shirts Big & Tall Tie Dye Summer Top Basic Designed Classic Cotton Shirt' [SEP] '$3.99 to $10.99' [SEP] 'B07N7TDKXQ' [SEP] 'SOCKS'NBULK Mens Cotton Crew Neck Short Sleeve T-Shirts Mix Colors Bulk' [SEP] '$38.79 to $172.8'",
      "'Back to Search' [SEP] '< Prev' [SEP] 'color' [SEP] 'army' [SEP] 'big game field camo' [SEP] 'black' [SEP] 'cardinal' [SEP] 'charcoal heather' [SEP] 'inferno' [SEP] 'mossy oak bottomland' [SEP] 'mossy oak country' [SEP] 'mossy oak country dna' [SEP] 'mossy oak coyote' [SEP] 'slate' [SEP] 'swamp' [SEP] 'turkey' [SEP] 'flag' [SEP] 'country' [SEP] 'fish' [SEP] 'size' [SEP] 'small' [SEP] 'medium' [SEP] 'large' [SEP] 'large tall' [SEP] 'x-large' [SEP] 'x-large tall' [SEP] 'xx-large' [SEP] 'xx-large big tall' [SEP] '3x-large big' [SEP] '3x-large big tall' [SEP] '4x-large big' [SEP] '4x-large big tall' [SEP] '5x-large big' [SEP] 'Legendary Whitetails Men's Non-Typical Long Sleeve T-Shirt' [SEP] 'Price: $10.52 to $40.5' [SEP] 'Rating: N.A.' [SEP] 'Description' [SEP] 'Features' [SEP] 'Reviews' [SEP] 'Buy Now'",
      "'Back to Search' [SEP] '< Prev' [SEP] 'color' [SEP] 'army' [SEP] 'big game field camo' [SEP] 'black' [SEP] 'cardinal' [SEP] 'charcoal heather' [SEP] 'inferno' [SEP] 'mossy oak bottomland' [SEP] 'mossy oak country' [SEP] 'mossy oak country dna' [SEP] 'mossy oak coyote' [SEP] 'slate' [SEP] 'swamp' [SEP] 'turkey' [SEP] 'flag' [SEP] 'country' [SEP] 'fish' [SEP] 'size' [SEP] 'small' [SEP] 'medium' [SEP] 'large' [SEP] 'large tall' [SEP] 'x-large' [SEP] 'x-large tall' [SEP] 'xx-large' [SEP] 'xx-large big tall' [SEP] '3x-large big' [SEP] '3x-large big tall' [SEP] '4x-large big' [SEP] '4x-large big tall' [SEP] '5x-large big' [SEP] 'Legendary Whitetails Men's Non-Typical Long Sleeve T-Shirt' [SEP] 'Price: $10.52 to $40.5' [SEP] 'Rating: N.A.' [SEP] 'Description' [SEP] 'Features' [SEP] 'Reviews' [SEP] 'Buy Now'",
      "'Back to Search' [SEP] '< Prev' [SEP] 'color' [SEP] 'army' [SEP] 'big game field camo' [SEP] 'black' [SEP] 'cardinal' [SEP] 'charcoal heather' [SEP] 'inferno' [SEP] 'mossy oak bottomland' [SEP] 'mossy oak country' [SEP] 'mossy oak country dna' [SEP] 'mossy oak coyote' [SEP] 'slate' [SEP] 'swamp' [SEP] 'turkey' [SEP] 'flag' [SEP] 'country' [SEP] 'fish' [SEP] 'size' [SEP] 'small' [SEP] 'medium' [SEP] 'large' [SEP] 'large tall' [SEP] 'x-large' [SEP] 'x-large tall' [SEP] 'xx-large' [SEP] 'xx-large big tall' [SEP] '3x-large big' [SEP] '3x-large big tall' [SEP] '4x-large big' [SEP] '4x-large big tall' [SEP] '5x-large big' [SEP] 'Legendary Whitetails Men's Non-Typical Long Sleeve T-Shirt' [SEP] 'Price: $10.52 to $40.5' [SEP] 'Rating: N.A.' [SEP] 'Description' [SEP] 'Features' [SEP] 'Reviews' [SEP] 'Buy Now'",
      "Rollout ended · episode reward 10.0"
    ],
    "skills": []
  }
};
