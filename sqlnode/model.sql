create table users(
    id serial primary key,
    usersname varchar(255),
    email text
);

insert into users(username, email) values ('Ilxom', 'ilxom@gmail.com');