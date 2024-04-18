USE buffetabogados;

CREATE TABLE users(
id BIGINT PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(255) NOT NULL UNIQUE,
nombre VARCHAR(180) NOT NULL,
apellido VARCHAR(180) NOT NULL,
telefono VARCHAR(90) NOT NULL UNIQUE,
imagen VARCHAR(255) NULL,
contraseña VARCHAR(255) NOT NULL,
rol varchar(255) NOT NULL,
matricula VARCHAR(50) NOT NULL UNIQUE,
tiene_certificado BOOLEAN DEFAULT FALSE,
inicio_certificado DATE,
finalizacion_certificado DATE,
created_at TIMESTAMP(0) NOT NULL,
update_at TIMESTAMP(0) NOT NULL
);

CREATE TABLE maestros (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    nombre VARCHAR(180) NOT NULL,
    apellido VARCHAR(180) NOT NULL,
    telefono VARCHAR(90) NOT NULL UNIQUE,
    imagen VARCHAR(255) NULL,
    contraseña VARCHAR(255) NOT NULL,
    matricula VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMP(0) NOT NULL,
    update_at TIMESTAMP(0) NOT NULL
);

CREATE TABLE alumnos (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    nombre VARCHAR(180) NOT NULL,
    apellido VARCHAR(180) NOT NULL,
    telefono VARCHAR(90) NOT NULL UNIQUE,
    imagen VARCHAR(255) NULL,
    contraseña VARCHAR(255) NOT NULL,
    matricula VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMP(0) NOT NULL,
    update_at TIMESTAMP(0) NOT NULL
);

CREATE TABLE admin (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    nombre VARCHAR(180) NOT NULL,
    apellido VARCHAR(180) NOT NULL,
    telefono VARCHAR(90) NOT NULL UNIQUE,
    imagen VARCHAR(255) NULL,
    contraseña VARCHAR(255) NOT NULL,
    matricula VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMP(0) NOT NULL,
    update_at TIMESTAMP(0) NOT NULL
);


DELIMITER //

CREATE TRIGGER after_insert_user
AFTER INSERT ON users
FOR EACH ROW
BEGIN
    IF LOWER(NEW.rol) = 'maestro' THEN
        INSERT INTO maestros (email, nombre, apellido, telefono, imagen, contraseña, matricula, created_at, update_at) 
        VALUES (NEW.email, NEW.nombre, NEW.apellido, NEW.telefono, NEW.imagen, NEW.contraseña, NEW.matricula, NEW.created_at, NEW.update_at);
    ELSEIF LOWER(NEW.rol) = 'alumno' THEN
        INSERT INTO alumnos (email, nombre, apellido, telefono, imagen, contraseña, matricula, created_at, update_at) 
        VALUES (NEW.email, NEW.nombre, NEW.apellido, NEW.telefono, NEW.imagen, NEW.contraseña, NEW.matricula, NEW.created_at, NEW.update_at);
    ELSEIF LOWER(NEW.rol) = 'admin' THEN
        INSERT INTO admin (email, nombre, apellido, telefono, imagen, contraseña, matricula, created_at, update_at) 
        VALUES (NEW.email, NEW.nombre, NEW.apellido, NEW.telefono, NEW.imagen, NEW.contraseña, NEW.matricula, NEW.created_at, NEW.update_at);
    END IF;
END//

DELIMITER ;


DELIMITER //

CREATE TRIGGER after_update_user
AFTER UPDATE ON users
FOR EACH ROW
BEGIN
    IF OLD.email <> NEW.email OR OLD.nombre <> NEW.nombre OR OLD.apellido <> NEW.apellido OR OLD.telefono <> NEW.telefono OR OLD.imagen <> NEW.imagen OR OLD.matricula <> NEW.matricula OR OLD.rol <> NEW.rol THEN
        IF LOWER(NEW.rol) = 'maestro' THEN
            -- Actualizar la tabla maestros
            UPDATE maestros 
            SET 
                email = NEW.email,
                nombre = NEW.nombre,
                apellido = NEW.apellido,
                telefono = NEW.telefono,
                imagen = NEW.imagen,
                contraseña = NEW.contraseña,
                matricula = NEW.matricula,
                update_at = NEW.update_at
            WHERE email = OLD.email;
            
            -- Eliminar registros relacionados en otras tablas
            DELETE FROM alumnos WHERE email = NEW.email;
            DELETE FROM admin WHERE email = NEW.email;
            
            -- Actualizar la columna matricula_maestro en la tabla clases
            UPDATE clases
            SET
                matricula_maestro = NEW.matricula
            WHERE matricula_maestro = OLD.matricula;
            
        ELSEIF LOWER(NEW.rol) = 'alumno' THEN
            -- Actualizar la tabla alumnos
            UPDATE alumnos 
            SET 
                email = NEW.email,
                nombre = NEW.nombre,
                apellido = NEW.apellido,
                telefono = NEW.telefono,
                imagen = NEW.imagen,
                contraseña = NEW.contraseña,
                matricula = NEW.matricula,
                update_at = NEW.update_at
            WHERE email = OLD.email;
            
            -- Eliminar registros relacionados en otras tablas
            DELETE FROM maestros WHERE email = NEW.email;
            DELETE FROM admin WHERE email = NEW.email;
		
            -- Actualizar la tabla alumnos_clases
            UPDATE alumnos_clases
            SET
                matricula_alumno = NEW.matricula,
                nombre_alumno = NEW.nombre,
                apellido_alumno = NEW.apellido
            WHERE matricula_alumno = OLD.matricula;
            
        ELSEIF LOWER(NEW.rol) = 'admin' THEN
            -- Actualizar la tabla admin
            UPDATE admin 
            SET 
                email = NEW.email,
                nombre = NEW.nombre,
                apellido = NEW.apellido,
                telefono = NEW.telefono,
                imagen = NEW.imagen,
                contraseña = NEW.contraseña,
                matricula = NEW.matricula,
                update_at = NEW.update_at
            WHERE email = OLD.email;
            
            -- Eliminar registros relacionados en otras tablas
            DELETE FROM maestros WHERE email = NEW.email;
            DELETE FROM alumnos WHERE email = NEW.email;
        END IF;
    END IF;
END//

DELIMITER ;

INSERT INTO users (email, nombre, apellido, telefono, contraseña, rol, matricula, tiene_certificado, inicio_certificado, finalizacion_certificado, created_at, update_at) 
VALUES ('admin@example.com', 'Admin', 'Admin', 'Admin', 'password', 'admin', 'ADM001', false, CURDATE(), CURDATE(), NOW(), NOW());


CREATE TABLE clases (
    id_clase BIGINT PRIMARY KEY AUTO_INCREMENT,
    nombre_clase VARCHAR(255) NOT NULL,
    descripcion TEXT,
    matricula_maestro VARCHAR(50),
    matricula_clase VARCHAR(50),
    id_maestro BIGINT,
    FOREIGN KEY (id_maestro) REFERENCES maestros(id),
    INDEX (id_maestro) 
);

CREATE TABLE alumnos_clases (
    id_alumno_clase BIGINT PRIMARY KEY AUTO_INCREMENT,
    id_alumno BIGINT,
    id_clase BIGINT,
    nombre_alumno VARCHAR(180),
    apellido_alumno VARCHAR(180),
    matricula_clase VARCHAR(50),
    matricula_alumno VARCHAR(50),
    FOREIGN KEY (id_alumno) REFERENCES alumnos(id),
    FOREIGN KEY (id_clase) REFERENCES clases(id_clase)
);

CREATE TABLE zoom (
    id_url BIGINT PRIMARY KEY AUTO_INCREMENT,
    url VARCHAR(255) NOT NULL,
    id_clase BIGINT,
    matricula_clase VARCHAR(50), -- Nueva columna
    FOREIGN KEY (id_clase) REFERENCES clases(id_clase)
);
DELIMITER //

CREATE TRIGGER before_insert_alumnos_clases
BEFORE INSERT ON alumnos_clases
FOR EACH ROW
BEGIN
    DECLARE v_nombre VARCHAR(180);
    DECLARE v_apellido VARCHAR(180);
    
    -- Obtener el nombre y apellido del alumno basado en la matrícula del alumno
    SELECT nombre, apellido INTO v_nombre, v_apellido
    FROM alumnos
    WHERE matricula = NEW.matricula_alumno;
    
    -- Asignar el nombre y apellido a las columnas correspondientes en la tabla alumnos_clases
    SET NEW.nombre_alumno = v_nombre;
    SET NEW.apellido_alumno = v_apellido;
END;
//

DELIMITER ;


CREATE TABLE excel (
    id INT AUTO_INCREMENT PRIMARY KEY,
    correo_electronico VARCHAR(255) NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    apellidos VARCHAR(255) NOT NULL,
    departamento VARCHAR(255),
    gerente VARCHAR(255),
    grupo_usuarios VARCHAR(255),
    grupo_chat VARCHAR(255),
    puesto_trabajo VARCHAR(255),
    ubicacion VARCHAR(255)
);

CREATE TABLE archivos_pdf (
  id_archivo BIGINT AUTO_INCREMENT PRIMARY KEY,
  nombre_archivo VARCHAR(255) NOT NULL,
  contenido_archivo LONGBLOB NOT NULL,
  id_clase BIGINT,
  matricula_clase VARCHAR(50),
  FOREIGN KEY (id_clase) REFERENCES clases(id_clase)
);
CREATE TABLE archivos_pdf_alumnos (
  id_archivo BIGINT AUTO_INCREMENT PRIMARY KEY,
  nombre_archivo VARCHAR(255) NOT NULL,
  contenido_archivo LONGBLOB NOT NULL,
  calificacion VARCHAR(50),
  id_clase BIGINT,
  matricula_clase VARCHAR(50),
  FOREIGN KEY (id_clase) REFERENCES clases(id_clase)
);


