const fs = require('fs').promises;

class Io {
    constructor(dir) {
        this.dir = dir;
    }

    async read() {
        const data = await fs.readFile(this.dir, 'utf8');

        return data.length ? JSON.parse(data, null, 2) : [];
    }

    async write(data) {
            await fs.writeFile(this.dir, JSON.stringify(data, null, 2));
        }
}

module.exports = Io;