// extra values: 'none' | 'anchor' | 'chair' | 'wall' | 'bar'
const EXERCISES = [

  // ── Chest ────────────────────────────────────────────────────────────
  { id:'push-up', name:'Push-Up', category:'Chest', type:'Bodyweight', position:'Prone', extra:'none',
    description:'Hands just wider than shoulders, body in a straight line head-to-heels; lower until chest nearly touches the floor, then press back up.' },

  { id:'band-chest-press', name:'Band Chest Press', category:'Chest', type:'Resistance Band', position:'Standing', extra:'anchor',
    description:'Hold a handle in each hand, press both forward until arms are straight, then return slowly. Anchor the band behind you at chest height.' },

  { id:'band-push-up', name:'Band Push-Up', category:'Chest', type:'Resistance Band', position:'Prone', extra:'none',
    description:'Do a normal push-up with the band draped across your back and ends held under your hands — the band adds resistance at the top of the press.' },

  { id:'band-chest-fly', name:'Band Chest Fly', category:'Chest', type:'Resistance Band', position:'Standing', extra:'anchor', 
    description:'Arms wide with a slight elbow bend, bring hands together in front of your chest in an arc, then open slowly. Anchor the band at chest height on both sides.' },

  { id:'incline-push-up', name:'Incline Push-Up', category:'Chest', type:'Bodyweight', position:'Prone (hands elevated)', extra:'chair',
    description:'Same form as a push-up but with hands on a raised surface — easier, great for higher reps.' },

  { id:'band-incline-press', name:'Band Incline Press', category:'Chest', type:'Resistance Band', position:'Standing', extra:'anchor', 
    description:'Press up and forward at an angle toward the ceiling, targeting the upper chest. Anchor the band low behind you.' },

  // ── Back ─────────────────────────────────────────────────────────────
  { id:'superman', name:'Superman', category:'Back', type:'Bodyweight', position:'Prone', extra:'none', 
    description:'Lying face down, lift arms, chest, and legs off the floor at once; hold briefly and lower.' },

  { id:'band-lat-pulldown', name:'Band Lat Pulldown', category:'Back', type:'Resistance Band', position:'Standing or kneeling', extra:'anchor', 
    description:'Arms overhead holding the band, pull elbows down and out toward your ribs, squeezing the lats. Anchor the band high.' },

  { id:'band-bent-over-row', name:'Band Bent-Over Row', category:'Back', type:'Resistance Band', position:'Standing', extra:'none', 
    description:'Stand on the band, hinge forward with a flat back, pull the handles to your waist driving the elbows back.' },

  { id:'band-seated-row', name:'Band Seated Row', category:'Back', type:'Resistance Band', position:'Seated', extra:'none', 
    description:'Sit with legs extended, loop the band at foot level or stand on it; pull to your stomach squeezing shoulder blades together.' },

  { id:'inverted-row', name:'Inverted Row', category:'Back', type:'Bodyweight', position:'Lying face up', extra:'bar', 
    description:'Hang under a bar or sturdy table with body straight, pull your chest up to it, then lower under control.' },

  { id:'band-straight-arm-pulldown', name:'Band Straight-Arm Pulldown', category:'Back', type:'Resistance Band', position:'Standing', extra:'anchor', 
    description:'Keep arms straight, pull the band from overhead down to your thighs in a sweeping arc. Anchor the band high.' },

  // ── Shoulders ────────────────────────────────────────────────────────
  { id:'pike-push-up', name:'Pike Push-Up', category:'Shoulders', type:'Bodyweight', position:'Prone (hips piked high)', extra:'none', 
    description:'In an inverted-V position, bend the elbows to lower the crown of your head toward the floor, then press up.' },

  { id:'band-overhead-press', name:'Band Overhead Press', category:'Shoulders', type:'Resistance Band', position:'Standing', extra:'none', 
    description:'Stand on the band. From shoulder height, press the handles straight overhead until arms lock out, then lower.' },

  { id:'band-lateral-raise', name:'Band Lateral Raise', category:'Shoulders', type:'Resistance Band', position:'Standing', extra:'none', 
    description:'Stand on the band. With slightly bent arms, raise the handles out to your sides up to shoulder height, then lower slowly.' },

  { id:'band-front-raise', name:'Band Front Raise', category:'Shoulders', type:'Resistance Band', position:'Standing', extra:'none', 
    description:'Stand on the band. Arms straight, raise the handles forward and up to shoulder height, then lower.' },

  { id:'wall-handstand-hold', name:'Wall Handstand Hold', category:'Shoulders', type:'Bodyweight', position:'Inverted', extra:'wall',
    description:'Kick up to a handstand with heels resting on the wall; hold a tight, straight body and breathe.' },

  { id:'band-face-pull', name:'Band Face Pull', category:'Shoulders', type:'Resistance Band', position:'Standing', extra:'anchor', 
    description:'Pull the band toward your face, hands splitting apart and elbows flaring high — great for posture. Anchor the band at face height.' },

  // ── Biceps ───────────────────────────────────────────────────────────
  { id:'chin-up', name:'Chin-Up', category:'Biceps', type:'Bodyweight', position:'Hanging', extra:'bar',
    description:'Underhand grip shoulder-width, pull your chin over the bar, then lower fully. No bar? Substitute an inverted row under a table.' },

  { id:'band-biceps-curl', name:'Band Biceps Curl', category:'Biceps', type:'Resistance Band', position:'Standing', extra:'none', 
    description:'Stand on the band. Elbows pinned to your sides, curl the handles up to your shoulders, then lower slowly.' },

  { id:'band-hammer-curl', name:'Band Hammer Curl', category:'Biceps', type:'Resistance Band', position:'Standing', extra:'none', 
    description:'Stand on the band. Same as a curl but palms face each other throughout — targets the outer arm and forearm.' },

  { id:'band-concentration-curl', name:'Band Concentration Curl', category:'Biceps', type:'Resistance Band', position:'Seated', extra:'chair', 
    description:'Stand on the band and sit down. Elbow braced on your inner thigh, curl one handle up with full control, then lower.' },

  { id:'towel-isometric-curl', name:'Towel Isometric Curl', category:'Biceps', type:'Bodyweight', position:'Seated', extra:'chair', 
    description:'Loop a towel under one thigh, pull up hard with the arm while resisting with the leg; hold the tension.' },

  { id:'band-wide-curl', name:'Band Wide Curl', category:'Biceps', type:'Resistance Band', position:'Standing', extra:'none', 
    description:'Stand on the band. Curl with arms angled out to the sides rather than straight forward, for an inner-biceps emphasis.' },

  // ── Triceps ──────────────────────────────────────────────────────────
  { id:'chair-dips', name:'Chair Dips', category:'Triceps', type:'Bodyweight', position:'Seated edge', extra:'chair', 
    description:'Hands on the seat behind you, lower your body by bending the elbows, then press back up.' },

  { id:'diamond-push-up', name:'Diamond Push-Up', category:'Triceps', type:'Bodyweight', position:'Prone', extra:'none', 
    description:'Push-up with hands close together forming a diamond shape under your chest — hits the triceps hard.' },

  { id:'band-triceps-pushdown', name:'Band Triceps Pushdown', category:'Triceps', type:'Resistance Band', position:'Standing', extra:'anchor', 
    description:'Elbows tucked, push the band down until arms are straight, then return slowly. Anchor the band high.' },

  { id:'band-overhead-extension', name:'Band Overhead Extension', category:'Triceps', type:'Resistance Band', position:'Standing', extra:'none', 
    description:'Stand on the band behind you, arms overhead; straighten the elbows to press the handles up, then lower behind your head.' },

  { id:'bench-dips-elevated', name:'Bench Dips, Feet Elevated', category:'Triceps', type:'Bodyweight', position:'Seated edge', extra:'chair', 
    description:'Harder version of chair dips — feet elevated on a second surface increases the load significantly.' },

  { id:'band-kickback', name:'Band Kickback', category:'Triceps', type:'Resistance Band', position:'Standing (hinged forward)', extra:'none', 
    description:'Stand on the band, hinge forward, upper arms still; extend the forearms straight back until arms are locked out.' },

  // ── Legs ─────────────────────────────────────────────────────────────
  { id:'bodyweight-squat', name:'Bodyweight Squat', category:'Legs', type:'Bodyweight', position:'Standing', extra:'none', 
    description:'Feet shoulder-width, sit hips back and down until thighs are about parallel, then drive up through your heels.' },

  { id:'lunge', name:'Walking / Reverse Lunge', category:'Legs', type:'Bodyweight', position:'Standing', extra:'none', 
    description:'Step forward (or back), lowering the back knee toward the floor, then push back to standing; alternate legs.' },

  { id:'band-squat', name:'Band Squat', category:'Legs', type:'Resistance Band', position:'Standing', extra:'none', 
    description:'Stand on the band with handles at shoulder height. Perform a squat — resistance increases as you stand up.' },

  { id:'band-glute-bridge', name:'Band Glute Bridge', category:'Legs', type:'Resistance Band', position:'Lying', extra:'none', 
    description:'On your back, knees bent, band over hips; drive hips up squeezing the glutes against the band, then lower.' },

  { id:'single-leg-glute-bridge', name:'Single-Leg Glute Bridge', category:'Legs', type:'Bodyweight', position:'Lying', extra:'none', 
    description:'Glute bridge with one foot off the floor — all the work on one leg; switch sides.' },

  { id:'band-lateral-walk', name:'Band Lateral Walk', category:'Legs', type:'Resistance Band', position:'Standing', extra:'none', 
    description:'Band around legs, in a half-squat, step sideways against the band keeping tension; step several reps each direction.' },

  // ── Core ─────────────────────────────────────────────────────────────
  { id:'plank', name:'Plank', category:'Core', type:'Bodyweight', position:'Prone (on forearms)', extra:'none', 
    description:'Hold a straight line from head to heels, bracing your abs and glutes; don\'t let the hips sag.' },

  { id:'bicycle-crunch', name:'Bicycle Crunch', category:'Core', type:'Bodyweight', position:'Lying', extra:'none', 
    description:'Bring opposite elbow to opposite knee while extending the other leg, alternating in a pedaling motion.' },

  { id:'band-pallof-press', name:'Band Pallof Press', category:'Core', type:'Resistance Band', position:'Standing', extra:'anchor', 
    description:'Hold the band at your chest and press straight out, resisting the pull that wants to twist you. Anchor the band to your side at chest height.' },

  { id:'band-dead-bug', name:'Band Dead Bug', category:'Core', type:'Resistance Band', position:'Lying', extra:'anchor', 
    description:'Hold the band overhead with arms fixed; extend opposite arm and leg slowly while keeping your back flat. Anchor the band high behind your head.' },

  { id:'mountain-climbers', name:'Mountain Climbers', category:'Core', type:'Bodyweight', position:'Prone (in a plank)', extra:'none', 
    description:'From a plank, drive your knees toward your chest one at a time, quickly, keeping hips low.' },

  { id:'band-woodchopper', name:'Band Woodchopper', category:'Core', type:'Resistance Band', position:'Standing', extra:'anchor', 
    description:'Pull the band diagonally across your body (high-to-low or low-to-high), rotating through the torso. Anchor the band high or low.' },

];
