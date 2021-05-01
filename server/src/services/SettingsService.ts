import SettingsRepository from '../repositories/SettingsRepository';
import Settings from '../entities/Setting';
import { getCustomRepository, Repository } from 'typeorm';

interface ISettingsCreate {
	chat: boolean;
	username: string;
}

class SettingsService {
	private settingsRepository: Repository<Settings>;

	constructor() {
		this.settingsRepository = getCustomRepository(SettingsRepository);
	}
	async create({ chat, username }: ISettingsCreate) {
		const userAlreadyExists = await this.settingsRepository.findOne({
			username,
		});

		if (userAlreadyExists) {
			throw new Error('user already exists');
		}

		const settings = this.settingsRepository.create({
			chat,
			username,
		});

		await this.settingsRepository.save(settings);

		return settings;
	}
}

export default SettingsService;
