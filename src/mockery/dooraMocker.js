import { readFile } from 'fs/promises';

export default class DooraMocker {

    _tags;

    constructor(tagsFilePath) {
        this.init(tagsFilePath);
    }

    async init(tagsFilePath) {
        try {
            const data = await readFile(tagsFilePath, 'utf8');
            const jsonData = JSON.parse(data);
            this._tags = jsonData;
        } catch (error) {
            console.error('Error reading or parsing the JSON file:', error);
        }
    }

    randomTag() {
        const max = this._tags.length;
        const select = Math.floor(Math.random() * max);
        return {
            ...this._tags[select],
            lastSeen:Date.now()
        };
    }
}