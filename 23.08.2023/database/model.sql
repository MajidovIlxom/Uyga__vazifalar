create database sklad;

CREATE TABLE workers (
    worker_id serial not null primary key,
    fullname varchar(100) not null,
    email varchar(64) unique not null,
    password text not null, 
    role boolean default false,
    isactive boolean default true
);

CREATE TABLE categores ( 
    category_id serial not null,
    name varchar(100) not null,
    isactive boolean default true,
    primary key (category_id)
);

CREATE TABLE products (
    product_id serial not null primary key,
    name varchar(46) not null,
    kg float not null,
    price float not null,
    category_id int references categores(category_id), 
    isactive boolean default true
);



CREATE TABLE histories ( 
    history_id serial not null,
    worker_id int not null,
    product_id int not null,
    is_sell boolean not null, 
    kg float not null,
    price float not null,
    created_at timestamp default current_timestamp,
    foreign key (worker_id) references workers(worker_id), 
    foreign key (product_id) references products(product_id) 
);

