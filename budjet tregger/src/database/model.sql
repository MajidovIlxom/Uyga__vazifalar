create database budjet;

create table users(
    user_id serial primary key,
    user_name varchar(32) not null,
    email varchar(32) not null,
    password varchar(255) not null,
    user_wallet bigint not null,
    is_active boolean not null,
    created_at timestamp without time zone default now(),
);


create table rasxod(
    rasxod_id serial primary key,
    rasxot_category_name varchar(25) not null,
    wallet int not null,
    rasxod_user_id int not null,
    created_at timestamp without time zone default now(),
);


create table daxod(
    daxot_id serial primary key,
    schot bigint not null,
    daxot_category_name varchar(25) not null,
    daxod_user_id int not null,
    created_at timestamp without time zone default now()
);


create table category(
    category_id serial primary key,
    category_name varchar(32) not null,
    rasxot_category_id int not null,
    daxot_category_id int not null,
    created_at timestamp without time zone default now(),
    foreign key (rasxot_category_id) references rasxod(rasxod_id),
    foreign key (daxot_category_id) references daxod(daxod_id),
);


create table history(
    id serial primary key,
    user_id int not null,
    rasxod_id int not null,
    daxod_id int not null,
    category_id int not null,
    foreign key (user_id) references users(user_id),
    foreign key (rasxod_id) references rasxod(rasxod_id),
    foreign key (daxod_id) references daxod(daxod_id),
    foreign key (category_id) references category(category_id),
)