const EXERCISES = [
  // ── Upper Body ──────────────────────────────────────────────────────
  {
    id: 'push-up', name: 'Push-Up', category: 'Upper Body',
    muscles: ['Chest', 'Triceps', 'Shoulders'], equipment: 'No equipment', difficulty: 'Beginner', emoji: '💪',
    description: 'The classic bodyweight pressing exercise. Push your body up from the floor using your arms, working your chest, triceps, and front shoulders simultaneously.',
    rationale: 'Push-ups are the cornerstone of bodyweight upper-body training. They require nothing, can be done anywhere, and scale in difficulty by adjusting hand width or elevation — one of the most efficient exercises for a micro-workout routine.',
    cues: ['Keep your body in a straight line from head to heels — no sagging hips.', 'Lower until your chest nearly touches the floor before pushing back up.', 'Keep elbows at roughly 45° from your torso, not flared wide.', 'Squeeze glutes and core throughout to protect your lower back.']
  },
  {
    id: 'wide-push-up', name: 'Wide Push-Up', category: 'Upper Body',
    muscles: ['Chest'], equipment: 'No equipment', difficulty: 'Beginner', emoji: '💪',
    description: 'A push-up with hands placed wider than shoulder-width, shifting more load onto the chest and reducing tricep involvement.',
    rationale: 'Pairing wide push-ups with standard or diamond push-ups gives you meaningful chest variation with zero equipment. A small grip change that makes a real difference in muscle emphasis.',
    cues: ['Hands 1.5–2× shoulder-width apart.', 'Keep elbows tracking over your wrists as you lower.', 'Feel the chest stretch at the bottom — that\'s the range you want.', 'Don\'t let hips rise or sag; maintain the plank position throughout.']
  },
  {
    id: 'diamond-push-up', name: 'Diamond Push-Up', category: 'Upper Body',
    muscles: ['Triceps', 'Chest'], equipment: 'No equipment', difficulty: 'Intermediate', emoji: '💎',
    description: 'A push-up variation with hands close together forming a diamond shape under your chest, maximising tricep engagement.',
    rationale: 'Diamond push-ups are one of the best bodyweight tricep exercises available. They directly address the back of the arm — an area often undertrained in bodyweight routines.',
    cues: ['Form a triangle with your index fingers and thumbs.', 'Keep elbows close to your body as you lower.', 'Feel the back of your upper arms working on each rep.', 'If wrists are uncomfortable, try fists on the floor for a neutral position.']
  },
  {
    id: 'pike-push-up', name: 'Pike Push-Up', category: 'Upper Body',
    muscles: ['Shoulders', 'Triceps'], equipment: 'No equipment', difficulty: 'Intermediate', emoji: '🔺',
    description: 'A push-up performed in a downward-dog position, loading the shoulders and serving as a progression toward handstand push-ups.',
    rationale: 'Most people neglect shoulder pressing in a bodyweight routine. Pike push-ups fill that gap — they work the deltoids in a pressing pattern without equipment.',
    cues: ['Form an inverted V with hips high and arms straight.', 'Lower the top of your head toward the floor between your hands.', 'Keep your core tight and avoid letting your hips drop mid-set.', 'The more vertical your torso, the more shoulder-dominant the movement.']
  },
  {
    id: 'decline-push-up', name: 'Decline Push-Up', category: 'Upper Body',
    muscles: ['Upper Chest', 'Shoulders'], equipment: 'No equipment', difficulty: 'Intermediate', emoji: '📐',
    description: 'A push-up with feet elevated, shifting the angle to emphasise the upper chest and anterior deltoids.',
    rationale: 'Decline push-ups target the upper chest, which is often undertrained in flat push-up variations. Use a chair or sofa to elevate your feet — no equipment needed.',
    cues: ['Use a stable surface for your feet — nothing that can slide.', 'The higher your feet, the more upper-chest and shoulder emphasis.', 'Maintain the same neutral spine and core tension as a standard push-up.', 'Lower slowly to build more chest tension through the full range.']
  },
  {
    id: 'pull-up', name: 'Pull-Up', category: 'Upper Body',
    muscles: ['Back', 'Biceps'], equipment: 'Pull-up bar', difficulty: 'Intermediate', emoji: '🏋️',
    description: 'The king of bodyweight upper-body pulling. Hang from a bar and pull yourself up until your chin clears it, using your back and biceps.',
    rationale: 'Pull-ups build more pulling strength than almost any other bodyweight exercise. They train the lats, rhomboids, and biceps in one compound movement.',
    cues: ['Start from a dead hang — full arm extension, shoulders relaxed.', 'Pull your shoulder blades down and back before bending your elbows.', 'Lead with your chest, not your chin.', 'Lower under control — the descent builds as much strength as the pull.']
  },
  {
    id: 'chin-up', name: 'Chin-Up', category: 'Upper Body',
    muscles: ['Biceps', 'Back'], equipment: 'Pull-up bar', difficulty: 'Intermediate', emoji: '💪',
    description: 'Similar to a pull-up but with an underhand grip, which increases bicep involvement and is often more accessible for beginners.',
    rationale: 'Chin-ups are slightly easier than pull-ups for most people, making them a great entry point to vertical pulling. The underhand grip also places biceps at a mechanical advantage.',
    cues: ['Use an underhand grip, hands shoulder-width apart.', 'Keep elbows tucking toward your sides as you pull.', 'Get your chin clearly above the bar at the top.', 'Avoid swinging — control the movement throughout.']
  },
  {
    id: 'inverted-row', name: 'Inverted Row', category: 'Upper Body',
    muscles: ['Back', 'Biceps'], equipment: 'Pull-up bar', difficulty: 'Beginner', emoji: '🔄',
    description: 'A horizontal pull using a low bar. You lie underneath and pull your chest up to the bar with your heels on the floor.',
    rationale: 'Inverted rows are the horizontal pulling equivalent of a push-up — bodyweight, no complex setup. They\'re essential for back training and balance out the pushing work from push-ups.',
    cues: ['Set the bar low enough to hang with arms almost fully extended.', 'Keep your body straight from heels to shoulders — don\'t pike.', 'Pull your chest to the bar, leading with your elbows.', 'Squeeze your shoulder blades together at the top before lowering.']
  },
  {
    id: 'dip', name: 'Dip', category: 'Upper Body',
    muscles: ['Triceps', 'Chest', 'Shoulders'], equipment: 'No equipment', difficulty: 'Intermediate', emoji: '⬇️',
    description: 'A compound pressing movement performed between two parallel surfaces. Works the triceps, chest, and shoulders.',
    rationale: 'Dips are one of the most effective bodyweight pushing exercises for the triceps and lower chest. Two kitchen chairs are all you need for one of the best upper-body movements available.',
    cues: ['Use two stable surfaces of equal height.', 'Lean torso slightly forward for chest emphasis; stay upright for triceps.', 'Lower until elbows hit 90° — don\'t go past what your shoulders allow.', 'Lock out fully at the top without shrugging.']
  },
  {
    id: 'band-pull-apart', name: 'Band Pull-Apart', category: 'Upper Body',
    muscles: ['Rear Deltoids', 'Upper Back'], equipment: 'Resistance band', difficulty: 'Beginner', emoji: '↔️',
    description: 'Hold a resistance band at arm\'s length in front of you and pull it apart until your arms are fully extended to your sides.',
    rationale: 'Band pull-aparts directly counteract rounded-shoulder posture from desk work and phone use. Easy to do anywhere with a cheap resistance band.',
    cues: ['Start with band at chest height, arms straight in front.', 'Pull the band apart by squeezing your shoulder blades together.', 'Keep your core engaged and avoid arching your lower back.', 'The movement is small — prioritise squeezing at end range over pulling fast.']
  },
  {
    id: 'face-pull', name: 'Face Pull', category: 'Upper Body',
    muscles: ['Rear Deltoids', 'Rotator Cuff', 'Upper Back'], equipment: 'Resistance band', difficulty: 'Beginner', emoji: '🎯',
    description: 'Anchor a resistance band at face height and pull it toward your face with elbows high and wide, targeting rear deltoids and external rotators.',
    rationale: 'Face pulls are essential for shoulder health, especially alongside pressing work. They strengthen the external rotators and rear deltoids — chronically weak in most people.',
    cues: ['Anchor the band at approximately face height.', 'Pull toward your face with elbows high — higher than your hands.', 'Externally rotate at the end so your hands move slightly behind your head.', 'Control the return — don\'t let the band snap back.']
  },
  {
    id: 'superman', name: 'Superman', category: 'Upper Body',
    muscles: ['Lower Back', 'Glutes', 'Rear Deltoids'], equipment: 'No equipment', difficulty: 'Beginner', emoji: '🦸',
    description: 'Lie face down and simultaneously lift your arms, chest, and legs off the floor, holding briefly at the top.',
    rationale: 'Superman targets the entire posterior chain. It\'s particularly effective for lower back health and counteracts the anterior dominance of push-heavy routines.',
    cues: ['Lie completely flat, arms extended in front of you.', 'Lift arms, chest, and legs simultaneously.', 'Squeeze your glutes and back muscles at the top.', 'Hold 1–2 seconds before lowering. Don\'t rush reps.']
  },

  // ── Core ────────────────────────────────────────────────────────────
  {
    id: 'plank', name: 'Plank', category: 'Core',
    muscles: ['Core', 'Shoulders'], equipment: 'No equipment', difficulty: 'Beginner', emoji: '📏',
    description: 'Hold a push-up position with a straight, rigid body line from head to heels, loading the entire core isometrically.',
    rationale: 'The plank is the most foundational core stability exercise. It trains the core\'s primary function — maintaining a rigid torso under load — which carries over to everything else.',
    cues: ['Stack wrists directly under shoulders, or go to forearms for an easier version.', 'Squeeze glutes and quads — the whole body should be rigid.', 'Don\'t let hips sag or pike. Imagine a glass of water balanced on your lower back.', 'Breathe steadily. Time under tension is the goal, not holding your breath.']
  },
  {
    id: 'side-plank', name: 'Side Plank', category: 'Core',
    muscles: ['Obliques', 'Core'], equipment: 'No equipment', difficulty: 'Intermediate', emoji: '📐',
    description: 'A lateral plank variation that loads the obliques and lateral hip stabilisers by holding a straight side-facing body line.',
    rationale: 'Side planks fill the lateral stability gap left by regular planks. Strong obliques protect the spine and are often neglected compared to anterior core work.',
    cues: ['Stack feet together or stagger them for more stability.', 'Push your hips up — don\'t let them sag toward the floor.', 'Top arm can rest on your hip or extend straight up.', 'Keep your neck neutral — don\'t look up or down.']
  },
  {
    id: 'hollow-body', name: 'Hollow Body Hold', category: 'Core',
    muscles: ['Core', 'Hip Flexors'], equipment: 'No equipment', difficulty: 'Intermediate', emoji: '🌙',
    description: 'Lie on your back and press your lower back flat into the floor while extending your arms overhead and lifting your legs, creating a hollowed-out shape.',
    rationale: 'The hollow body hold teaches true anterior core tension and carries over to almost every pressing, pulling, and overhead movement. Harder than it looks.',
    cues: ['Press your lower back completely flat — no gap between back and floor.', 'Legs together, toes pointed, arms overhead by your ears.', 'Lower legs as close to the floor as possible without losing the flat-back position.', 'If your back arches, raise your legs higher — that\'s your current limit.']
  },
  {
    id: 'dead-bug', name: 'Dead Bug', category: 'Core',
    muscles: ['Core', 'Hip Flexors'], equipment: 'No equipment', difficulty: 'Beginner', emoji: '🪲',
    description: 'Lie on your back with arms pointing up and knees at 90°. Alternate extending opposite arm and leg toward the floor while keeping your lower back pressed down.',
    rationale: 'Dead bugs teach anti-extension core control — the ability to resist your back arching under load. Beginner-friendly and directly transferable to almost every compound movement.',
    cues: ['Start with your lower back firmly pressed into the floor. This must stay constant.', 'Move slowly — control, not speed.', 'Fully extend the arm and leg before returning them.', 'Breathe out as you extend — it helps maintain the flat-back position.']
  },
  {
    id: 'bicycle-crunch', name: 'Bicycle Crunch', category: 'Core',
    muscles: ['Obliques', 'Core'], equipment: 'No equipment', difficulty: 'Beginner', emoji: '🚴',
    description: 'Alternate bringing opposite elbow and knee toward each other in a cycling motion, engaging both the rectus abdominis and obliques.',
    rationale: 'Bicycle crunches are one of the few crunch variations that effectively engage both the obliques and the rectus abdominis in the same movement.',
    cues: ['Move slowly and deliberately — fast reps become mostly momentum.', 'Keep your lower back pressed into the floor throughout.', 'Rotate through your torso, not just your neck — your shoulder should come across.', 'Keep the non-working leg extended straight at a low angle for more challenge.']
  },
  {
    id: 'leg-raise', name: 'Leg Raise', category: 'Core',
    muscles: ['Core', 'Hip Flexors'], equipment: 'No equipment', difficulty: 'Intermediate', emoji: '🦵',
    description: 'Lie flat and raise your straight legs from the floor to vertical, then lower them under control without letting them touch down.',
    rationale: 'Leg raises are one of the best lower-ab targeting exercises available. Scalable — bend your knees to make them easier, add a hip lift at the top to make them harder.',
    cues: ['Press your lower back into the floor before you start.', 'Keep legs together and as straight as possible.', 'Lower slowly — the descent is where most of the work happens.', 'Stop just before heels touch, then raise again. Don\'t rest at the bottom.']
  },
  {
    id: 'mountain-climber', name: 'Mountain Climber', category: 'Core',
    muscles: ['Core', 'Hip Flexors', 'Shoulders'], equipment: 'No equipment', difficulty: 'Intermediate', emoji: '⛰️',
    description: 'From a plank position, alternate driving your knees rapidly toward your chest. A high-intensity core and conditioning exercise.',
    rationale: 'Mountain climbers combine core stability with cardiovascular work. They elevate heart rate quickly, making them ideal for short, efficient micro-workout sets.',
    cues: ['Hold a solid plank before starting — don\'t let hips drop or rise.', 'Drive each knee toward your chest as far as possible.', 'Keep your core engaged; hips shouldn\'t bounce up and down.', 'Speed for conditioning; slow reps for core control.']
  },
  {
    id: 'v-up', name: 'V-Up', category: 'Core',
    muscles: ['Core', 'Hip Flexors'], equipment: 'No equipment', difficulty: 'Intermediate', emoji: '✌️',
    description: 'Simultaneously raise your legs and torso to meet in the middle, forming a V shape, then lower back down under control.',
    rationale: 'V-ups challenge the full anterior core in a dynamic, high-range movement requiring both hip flexor strength and abdominal control.',
    cues: ['Start fully extended — arms overhead, legs long on the floor.', 'Lift both at the same time, reaching your hands toward your toes.', 'Keep legs as straight as possible throughout.', 'If the full version is too hard, try a tuck V-up with bent knees.']
  },

  // ── Lower Body ──────────────────────────────────────────────────────
  {
    id: 'squat', name: 'Squat', category: 'Lower Body',
    muscles: ['Quads', 'Glutes'], equipment: 'No equipment', difficulty: 'Beginner', emoji: '🦵',
    description: 'The foundational lower-body movement. Sit back and down with chest up, then drive through your heels to stand.',
    rationale: 'Bodyweight squats build foundational leg and glute strength. As a micro-workout exercise, a set of squats between tasks is one of the easiest ways to keep your lower body active throughout the day.',
    cues: ['Feet shoulder-width apart, toes slightly turned out.', 'Sit back and down — pretend you\'re lowering onto a chair.', 'Keep your chest up and knees tracking over your toes.', 'Drive through your full foot to stand — don\'t rise onto your toes.']
  },
  {
    id: 'jump-squat', name: 'Jump Squat', category: 'Lower Body',
    muscles: ['Quads', 'Glutes', 'Calves'], equipment: 'No equipment', difficulty: 'Intermediate', emoji: '🚀',
    description: 'A squat with an explosive jump at the top, landing softly and immediately going into the next rep.',
    rationale: 'Jump squats add power and intensity to standard squats, spike heart rate quickly, and develop explosive leg strength. Excellent for short, high-effort micro-workout sets.',
    cues: ['Squat to depth first, then drive explosively through your heels.', 'Fully extend through ankles, knees, and hips at the top.', 'Land softly — toes first, then heels, bending knees to absorb the impact.', 'Go straight into the next squat on landing.']
  },
  {
    id: 'bulgarian-split-squat', name: 'Bulgarian Split Squat', category: 'Lower Body',
    muscles: ['Quads', 'Glutes'], equipment: 'No equipment', difficulty: 'Intermediate', emoji: '🎯',
    description: 'A single-leg squat with your rear foot elevated on a chair or sofa, heavily loading the front leg.',
    rationale: 'Bulgarian split squats address leg imbalances, challenge stability, and provide a deeper range of motion than regular squats — with nothing but a chair.',
    cues: ['Place rear foot on a surface about knee height behind you.', 'Front foot should be far enough forward that your shin stays vertical.', 'Lower until your rear knee nearly touches the floor.', 'Drive through your front heel to stand — feel the front glute working.']
  },
  {
    id: 'lunge', name: 'Lunge', category: 'Lower Body',
    muscles: ['Quads', 'Glutes'], equipment: 'No equipment', difficulty: 'Beginner', emoji: '🚶',
    description: 'Step forward into a split stance and lower your rear knee toward the floor, then push back to the start.',
    rationale: 'Lunges train single-leg strength and stability with a natural, functional movement pattern. Effective for quads and glutes without any equipment.',
    cues: ['Step far enough forward that your front shin stays vertical.', 'Lower your back knee toward the floor — don\'t let it crash.', 'Keep your torso upright throughout — don\'t lean forward.', 'Push through your front foot heel to return to standing.']
  },
  {
    id: 'reverse-lunge', name: 'Reverse Lunge', category: 'Lower Body',
    muscles: ['Quads', 'Glutes'], equipment: 'No equipment', difficulty: 'Beginner', emoji: '↩️',
    description: 'Step backward into a split stance and lower your rear knee toward the floor. Easier on the knees than forward lunges for many people.',
    rationale: 'Reverse lunges are more knee-friendly than forward lunges because the front foot stays planted, reducing shear force. Great for those with knee sensitivity.',
    cues: ['Step back far enough to create a 90° angle at both knees.', 'The back knee should lower straight down, not swing outward.', 'Keep your front foot flat — don\'t let your heel rise.', 'Push through your front foot to return to standing.']
  },
  {
    id: 'glute-bridge', name: 'Glute Bridge', category: 'Lower Body',
    muscles: ['Glutes', 'Hamstrings'], equipment: 'No equipment', difficulty: 'Beginner', emoji: '🌉',
    description: 'Lie on your back with knees bent and drive your hips up by squeezing your glutes, forming a straight line from knees to shoulders.',
    rationale: 'Glute bridges are one of the best exercises for activating the glutes, which are chronically underactive in people who sit all day. No equipment needed.',
    cues: ['Feet flat, knees bent, arms by your sides.', 'Drive hips up by squeezing your glutes — not by pushing through your lower back.', 'Hold at the top for a second and really contract the glutes.', 'Lower slowly — don\'t just drop back down.']
  },
  {
    id: 'single-leg-glute-bridge', name: 'Single-Leg Glute Bridge', category: 'Lower Body',
    muscles: ['Glutes', 'Hamstrings'], equipment: 'No equipment', difficulty: 'Intermediate', emoji: '🦵',
    description: 'A glute bridge with one leg extended straight, all the work done by one glute at a time.',
    rationale: 'The single-leg version dramatically increases glute demand and reveals any asymmetry between sides. A significant progression with no equipment needed.',
    cues: ['Extend one leg straight out at the same height as your working knee.', 'Drive through the planted heel to raise your hips.', 'The extended leg shouldn\'t touch the floor until the set is done.', 'Squeeze hard at the top — one glute is doing all the work.']
  },
  {
    id: 'hip-thrust', name: 'Hip Thrust', category: 'Lower Body',
    muscles: ['Glutes'], equipment: 'No equipment', difficulty: 'Intermediate', emoji: '💥',
    description: 'With your upper back resting on a sofa and feet flat on the floor, drive your hips toward the ceiling by squeezing your glutes.',
    rationale: 'Hip thrusts place the glutes under load at full extension — the range where glute bridges can\'t reach. The elevated back dramatically increases range of motion and glute activation.',
    cues: ['Upper back rests across a stable surface at about knee height.', 'Feet flat, shin vertical or slightly past vertical.', 'Drive hips up until your body forms a straight line from knees to shoulders.', 'Squeeze glutes hard at the top and hold briefly before lowering.']
  },
  {
    id: 'nordic-curl', name: 'Nordic Curl', category: 'Lower Body',
    muscles: ['Hamstrings'], equipment: 'No equipment', difficulty: 'Advanced', emoji: '⚡',
    description: 'Anchor your ankles and lower your body slowly toward the floor using only your hamstrings, then use your hands to push back up.',
    rationale: 'Nordic curls are one of the most effective hamstring exercises available. Research shows they significantly reduce hamstring injury risk. Extremely challenging even for advanced athletes.',
    cues: ['Anchor your ankles securely under a sofa or fixed surface.', 'Lower as slowly as possible — control is everything.', 'Use your hands to catch yourself near the floor.', 'Even 3–5 slow reps is excellent. Don\'t rush this one.']
  },
  {
    id: 'good-morning', name: 'Good Morning', category: 'Lower Body',
    muscles: ['Hamstrings', 'Lower Back', 'Glutes'], equipment: 'No equipment', difficulty: 'Intermediate', emoji: '🌅',
    description: 'Stand with hands behind your head and hinge at the hips, lowering your torso toward horizontal while keeping legs mostly straight.',
    rationale: 'Good mornings train the hip hinge pattern and posterior chain without equipment — critical for posture and injury prevention.',
    cues: ['Hands behind your head or crossed over your chest.', 'Hinge at the hips — push them back, don\'t round your lower back.', 'Feel a strong stretch in your hamstrings at the bottom.', 'Return by driving your hips forward, not by lifting your chest.']
  },
  {
    id: 'calf-raise', name: 'Calf Raise', category: 'Lower Body',
    muscles: ['Calves'], equipment: 'No equipment', difficulty: 'Beginner', emoji: '👟',
    description: 'Stand and rise onto your toes, then lower slowly, training the gastrocnemius and soleus of the calf.',
    rationale: 'Calves are one of the most undertrained muscle groups. Calf raises can be done any time you\'re standing — waiting for a kettle, between tasks, anywhere.',
    cues: ['Stand on both feet, or use a step edge for extra range.', 'Rise as high onto your toes as possible.', 'Lower slowly — a 3-second descent maximises time under tension.', 'Don\'t bounce at the bottom. Pause briefly before the next rep.']
  },
  {
    id: 'single-leg-calf-raise', name: 'Single-Leg Calf Raise', category: 'Lower Body',
    muscles: ['Calves'], equipment: 'No equipment', difficulty: 'Intermediate', emoji: '🦶',
    description: 'A calf raise performed on one leg, doubling the load on a single calf.',
    rationale: 'Single-leg calf raises are significantly harder and address calf strength imbalances. A key progression for running performance or ankle rehabilitation.',
    cues: ['Hold a wall lightly for balance — not to push yourself up.', 'Raise as high as possible, then lower all the way down slowly.', 'The non-working leg stays off the ground throughout the set.', 'Go through full range of motion — don\'t do partial reps.']
  }
];
