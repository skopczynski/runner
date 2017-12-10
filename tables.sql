/*
This is never ran it is just for us to keep track of the current schemas
*/


create table users(
    user_id int auto_increment,
    fullname varchar(50),
    user_password varchar(50),
    class_year int,
    primary key(user_id)
);

create table health(
    health_id int auto_increment,
    user_id int,
    stress int,
    meals int,
    sleep int,
    health_date varchar(20),
    primary key(health_id, user_id),
    foreign key (user_id) references users(user_id)
);

create table shoe(
    shoe_id int auto_increment,
    user_id int,
    s_date varchar(20),
    e_date varchar(20),
    stype varchar(50),
    primary key(shoe_id, user_id),
    foreign key (user_id) references users(user_id)
);

create table run(
    run_id INT AUTO_INCREMENT,
    user_id int, 
    mileage int, 
    run_date DATETIME, 
    feeling int, 
    description varchar(200), 
    primary key(run_id, user_id) , 
    foreign key(user_id) references users(user_id)
);