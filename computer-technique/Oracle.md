# oracle21c

## Connect
Your **Windows user** is automatically added to the *ORA_DBA* operating system group, which grants you the SYSDBA privileges.
```batch
#rem path
cd <oracle_home>\bin
#rem connect
sqlplus / as sysdba
SQL> SHUTDOWN IMMEDIATE
SQL> STARTUP
SQL> ALTER PLUGGABLE DATABASE ALL OPEN;
#setting pluggable database to automatically open
SQL> ALTER PLUGGABLE DATABASE ALL SAVE STATE;
cd <oracle_home>\bin
lsnrctl status
```
useful sql to catch some information:
```sql
create pluggable database {db_name} admin user {usr_name} identified by {pwd} FILE_NAME_CONVERT=('/home/oracle/app/oracle/oradata/cdb1/pdbseed','/home/oracle/app/oracle/oradata/cdb1/db_name');
select * from dba_pdbs;
select * from v$pdbs;
alter session set container={container_name};
select * from dba_data_files;
```

## create user and gran permission
```sql
CREATE USER books_admin IDENTIFIED BY MyPassword;
# providing roles
GRANT CONNECT,RESOURCE,DBA TO books_admin;
# assigning privileges

grant creat session grant any privilege to books_admin;
grant unlimited tablespace to books_admin;

# table privileges (for older version)
grant select, insert, update,delete on schema.books
to books_admin;

# drop user
drop user {name} cascade;
```