import { BaseScene } from './BaseScene';

export class LoadScene extends BaseScene {
	constructor(key: string, options: any) {
		super('LoadScene');
	}

	public preload(): void {
		const progress = this.add.graphics();

		this.load.on('progress', (value: number) => {
			progress.clear();
			progress.fillStyle(0xffffff, 1);
			progress.fillRect(
				0,
				this.scale.gameSize.height / 2,
				this.scale.gameSize.width * value,
				60,
			);
		});

		this.load.on('complete', () => {
			progress.destroy();
		});

		this.load.image('clouds1', './assets/clouds.png');
		this.load.image('clouds2', './assets/clouds2.png');
		this.load.image('mountain', './assets/mountain.png');
		this.load.image('hills', './assets/hills.png');
		this.load.image('boulder1', './assets/boulder.png');
		this.load.image('boulder2', './assets/boulder2.png');
		this.load.image('tree1', './assets/tree.png');
		this.load.image('tree2', './assets/tree2.png');
		this.load.image('tree3', './assets/tree3.png');
		this.load.image('turnsign', './assets/turn-sign.png');

		this.load.spritesheet('particles', './assets/smoke-particle.png', { frameWidth: 16, frameHeight: 16 });

		this.load.binary('playercar', './assets/3d/car.glb');
	}

	public create(): void {
		this.scene.start('GameScene', {});
	}

}
