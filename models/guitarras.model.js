const db = require('../util/database');

class Guitarra {
    constructor(id, nombre, descripcion, precio) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM guitarras');
    }

    static findById(id) {
        return db.execute('SELECT * FROM guitarras WHERE id = ?', [id]);
    }

    save() {
        return db.execute(
            'INSERT INTO guitarras (nombre, descripcion, precio) VALUES (?, ?, ?)',
            [this.nombre, this.descripcion, this.precio]
        );
    }

    update() {
        return db.execute(
            'UPDATE guitarras SET nombre = ?, descripcion = ?, precio = ? WHERE id = ?',
            [this.nombre, this.descripcion, this.precio, this.id]
        );
    }
}

module.exports = Guitarra;