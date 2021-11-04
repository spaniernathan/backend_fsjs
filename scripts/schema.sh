#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    \connect postgres;
    CREATE SCHEMA ht_local;
    \dn;
EOSQL
