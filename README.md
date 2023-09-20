
# CleanArchitecture Sample From NodeJS Inspired By DevMastery


* Youtube Link: https://www.youtube.com/watch?v=CnailTcJV_U


### Technologies
* MySQL
* NodeJS
#### Frameworks/Libraries
* ExpressJS
* BcryptJS for hashing to password
* Util for managment to db object and that db object can be async


### Techniques

* ''Depency Injection'' because avoid dependence between layers.For example;UseCases layer method's dbParameter never should be know directly to which dbTechnology is actually.

* "Basicly Validation" because if incoming request is not adapted to the rules we want,we will not save request's data to db.There!İf you want to handle this,you should write or use validate data mechanism


  <!-- "MYSQL_USER":"ispeck",
    "MYSQL_ROOT_PASSWORD":"Root1234",
    "MYSQL_DATABASE":"ispeck",
    "MYSQL_LOCAL_PORT":"3306",
    "MYSQL_DOCKER_PORT":"3306",
    "MYSQL_HOST":"202.21.32.156",
    "ISPECK_HOST":"http://103.13.113.132:9000", -->


    <!-- // "MYSQL_USER":"root",
    // "MYSQL_ROOT_PASSWORD":"ispeck22pw",
    // "MYSQL_DATABASE":"ispeck",
    // "MYSQL_LOCAL_PORT":"3306",
    // "MYSQL_DOCKER_PORT":"3306",
    // "MYSQL_HOST":"ispeckmariadb",
    // "ISPECK_HOST":"http://103.13.113.132:9000", -->









# sandbox_node
