export function flap(bird){return {...bird,vy:-5.2}}
export function stepBird(bird,gravity=.32){return {...bird,y:bird.y+bird.vy,vy:bird.vy+gravity}}
export function hitsGate(bird,gate){const overlap=bird.x+bird.r>gate.x&&bird.x-bird.r<gate.x+gate.width;return overlap&&(bird.y-bird.r<gate.gapY-gate.gap/2||bird.y+bird.r>gate.gapY+gate.gap/2)}
export function passedGate(bird,gate){return !gate.scored&&gate.x+gate.width<bird.x}
