import {
  Application,
  Color,
  Entity,
  FILLMODE_FILL_WINDOW,
  RESOLUTION_AUTO,
} from 'playcanvas';

const canvas = document.getElementById('app');
const app = new Application(canvas);

app.setCanvasFillMode(FILLMODE_FILL_WINDOW);
app.setCanvasResolution(RESOLUTION_AUTO);
app.graphicsDevice.maxPixelRatio = Math.min(window.devicePixelRatio, 2);
window.addEventListener('resize', () => app.resizeCanvas());

const camera = new Entity('camera');
camera.addComponent('camera', { clearColor: new Color(0.1, 0.1, 0.23) });
camera.setPosition(0, 1.5, 6);
camera.lookAt(0, 0, 0);
app.root.addChild(camera);

const light = new Entity('light');
light.addComponent('light', { type: 'directional' });
light.setEulerAngles(45, 30, 0);
app.root.addChild(light);

const box = new Entity('box');
box.addComponent('render', { type: 'box' });
app.root.addChild(box);

app.on('update', (dt) => box.rotate(0, 40 * dt, 0));
app.start();