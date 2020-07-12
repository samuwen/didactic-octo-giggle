FROM postgres:13
COPY seed.sql .
RUN psql -U postgres -f seed.sql
RUN rm seed.sql