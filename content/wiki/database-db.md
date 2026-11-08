---
title: "Database / DB"
date: "2022-09-28"
updated: "2025-04-27"
description: "Postgres tool links grouped by theme: pooling with PgBouncer and Supavisor, monitoring, pgbadger logging, Citus, plus DBaaS options and general DB tools."
status: ["Not started"]
source: "https://f3l1x.super.site/wiki/database-db"
---

# Postgres

**Pooling**

-   [https://www.pgbouncer.org/](https://www.pgbouncer.org/)
-   [https://github.com/postgresml/pgcat](https://github.com/postgresml/pgcat)
-   [https://github.com/yandex/odyssey](https://github.com/yandex/odyssey)
-   [https://github.com/supabase/supavisor](https://github.com/supabase/supavisor)

**Metrics**

-   [https://github.com/rapidloop/pgmetrics](https://github.com/rapidloop/pgmetrics)

**Monitoring**

-   [https://pgdash.io/](https://pgdash.io/)
-   [https://github.com/bucardo/check\_postgres](https://github.com/bucardo/check_postgres)
-   [https://pgcluu.darold.net/](https://pgcluu.darold.net/)

**Optimize**

-   [https://github.com/reorg/pg\_repack](https://github.com/reorg/pg_repack)
-   [https://codeberg.org/Data-Bene/StatsMgr](https://codeberg.org/Data-Bene/StatsMgr)
-   [https://www.pgpool.net/mediawiki/index.php/Main\_Page](https://www.pgpool.net/mediawiki/index.php/Main_Page)

**Logging**

-   [https://github.com/darold/pgbadger](https://github.com/darold/pgbadger)

**Search**

-   [https://github.com/paradedb/paradedb](https://github.com/paradedb/paradedb)
-   [https://github.com/zombodb/zombodb/](https://github.com/zombodb/zombodb/)

**Distributed**

-   [https://github.com/citusdata/citus](https://github.com/citusdata/citus)
-   [https://github.com/yugabyte/yugabyte-db](https://github.com/yugabyte/yugabyte-db)
-   [https://github.com/crate/crate](https://github.com/crate/crate)
-   [https://github.com/cockroachdb/cockroach/](https://github.com/cockroachdb/cockroach/)

**NoSQL**

-   [https://www.ferretdb.com/](https://www.ferretdb.com/)

**AI + Vector**

-   [https://github.com/timescale/pgai](https://github.com/timescale/pgai)
-   [https://github.com/pgvector/pgvector](https://github.com/pgvector/pgvector)

**Performance Analyzer**

-   [https://github.com/ankane/pghero](https://github.com/ankane/pghero)

**Log Analyzer**

-   [https://github.com/darold/pgbadger](https://github.com/darold/pgbadger)

**Schedules**

-   [https://github.com/citusdata/pg\_cron](https://github.com/citusdata/pg_cron)
-   [https://github.com/tembo-io/pg\_later](https://github.com/tembo-io/pg_later)

**All-in-one**

-   [https://github.com/tembo-io/tembo](https://github.com/tembo-io/tembo)
-   [https://github.com/supabase/supabase/](https://github.com/supabase/supabase/)
-   [https://github.com/omnigres/omnigres](https://github.com/omnigres/omnigres)

**Graph**

-   [https://github.com/apache/age](https://github.com/apache/age)

**Storage**

-   [https://github.com/orioledb/orioledb](https://github.com/orioledb/orioledb)

**Awesome Postgres**

-   [https://gist.github.com/joelonsql/e5aa27f8cc9bd22b8999b7de8aee9d47](https://gist.github.com/joelonsql/e5aa27f8cc9bd22b8999b7de8aee9d47)
-   [https://github.com/dhamaniasad/awesome-postgres](https://github.com/dhamaniasad/awesome-postgres)

**Alternatives**

-   [https://duckdb.org/](https://duckdb.org/)
-   [https://clickhouse.com/](https://clickhouse.com/)
-   [https://ydb.tech/](https://ydb.tech/)

**Utils**

-   [https://pgdoc.link/](https://pgdoc.link/)
-   [https://why-upgrade.depesz.com/show?from=17.3&to=17.4](https://why-upgrade.depesz.com/show?from=17.3&to=17.4)
-   [https://explain.depesz.com/](https://explain.depesz.com/)
-   [https://pgxman.com/](https://pgxman.com/)
-   [https://www.repmgr.org/](https://www.repmgr.org/)

**Serverless**

-   [https://lambda.store/](https://lambda.store/)
-   [https://supabase.io/](https://supabase.io/)
-   [https://www.roomservice.dev/](https://www.roomservice.dev/)
-   [https://quirrel.dev/](https://quirrel.dev/)

**Timeseries**

-   [https://www.timescale.com/](https://www.timescale.com/)
-   [https://github.com/MaterializeInc/materialize](https://github.com/MaterializeInc/materialize)

**Realtime**

-   [https://github.com/electric-sql/electric](https://github.com/electric-sql/electric)

## Resources

-   [https://www.timescale.com/blog/how-we-made-postgresql-as-fast-as-pinecone-for-vector-data/](https://www.timescale.com/blog/how-we-made-postgresql-as-fast-as-pinecone-for-vector-data/)

## Examples

**Docker**

-   [https://github.com/risingwavelabs/risingwave/blob/main/integration\_tests/citus-cdc/docker-compose.yml](https://github.com/risingwavelabs/risingwave/blob/main/integration_tests/citus-cdc/docker-compose.yml)
-   [https://github.com/bmeares/Meerschaum/blob/main/tests/docker-compose.yaml](https://github.com/bmeares/Meerschaum/blob/main/tests/docker-compose.yaml)
-   [https://github.com/citusdata/django-multitenant/blob/main/docker-compose.yml](https://github.com/citusdata/django-multitenant/blob/main/docker-compose.yml)
-   [https://docs.yugabyte.com/preview/deploy/multi-dc/read-replica-clusters/](https://docs.yugabyte.com/preview/deploy/multi-dc/read-replica-clusters/)
-   [https://github.com/elsa-workflows/elsa-core/blob/main/scripts/docker/docker-compose-citus.yml](https://github.com/elsa-workflows/elsa-core/blob/main/scripts/docker/docker-compose-citus.yml)
-   [https://github.com/akka/akka-projection/blob/main/docker-files/docker-compose-yugabyte.yml](https://github.com/akka/akka-projection/blob/main/docker-files/docker-compose-yugabyte.yml)

# DBaaS

-   [https://planetscale.com/](https://planetscale.com/)
-   [https://scalingo.com/](https://scalingo.com/)
-   [https://railway.app/](https://railway.app/)
-   [https://neon.tech/](https://neon.tech/)

# Tools

-   [https://github.com/dolthub/dolt](https://github.com/dolthub/dolt)
-   [https://github.com/osquery/osquery](https://github.com/osquery/osquery)
-   [https://github.com/cube2222/octosql](https://github.com/cube2222/octosql)
-   [https://github.com/BurntSushi/xsv](https://github.com/BurntSushi/xsv)

# DB

-   [https://www.edgedb.com/](https://www.edgedb.com/)
-   [https://typedb.com/](https://typedb.com/)
-   [https://questdb.io/](https://questdb.io/)
-   [https://github.com/scylladb/scylladb](https://github.com/scylladb/scylladb)
-   [https://github.com/get-convex/convex-backend](https://github.com/get-convex/convex-backend)
-   [https://github.com/surrealdb/surrealdb](https://github.com/surrealdb/surrealdb)
