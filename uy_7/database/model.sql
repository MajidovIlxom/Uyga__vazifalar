
CREATE DATABASE xizmatlar;

CREATE TABLE users(
    user_id serial PRIMARY KEY,
    name varchar(32) NOT NULL,
    username varchar(64) NOT NULL,
    balance int NOT NULL,
    password varchar(12) NOT NULL,
    created_at timestamp without time zone default now()
);

CREATE TABLE xizmat(
    xizmat_id serial PRIMARY KEY,
    name varchar(32) NOT NULL,
    price int NOT NULL,
    user_id int not null,
    created_at timestamp without time zone default current_timestamp,

    foreign key (user_id) references users(user_id) on delete cascade
);

