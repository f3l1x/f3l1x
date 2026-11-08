---
title: "Observability"
date: "2022-09-28"
updated: "2025-08-11"
description: "Bookmarks on error logging services such as Sentry, Rollbar, Bugsnag and Papertrail, plus Prometheus alternatives like Thanos, Mimir and VictoriaMetrics."
status: ["Not started"]
source: "https://f3l1x.super.site/wiki/observability"
---

# Error Logging

-   [https://timber.io/](https://timber.io/)
-   [https://papertrailapp.com/](https://papertrailapp.com/)
-   [https://www.rapid7.com/](https://www.rapid7.com/)
-   [https://www.fluentd.org/](https://www.fluentd.org/)
-   [https://logrocket.com/](https://logrocket.com/)
-   [https://rollbar.com/](https://rollbar.com/)
-   [https://www.honeybadger.io/](https://www.honeybadger.io/)
-   [https://airbrake.io/](https://airbrake.io/)
-   [https://raygun.com/](https://raygun.com/)
-   [https://logentries.com/](https://logentries.com/)
-   [https://trackjs.com/](https://trackjs.com/)
-   [https://catchjs.com/](https://catchjs.com/)
-   [https://flareapp.io/](https://flareapp.io/)
-   [https://errorception.com/](https://errorception.com/)
-   [https://www.loggly.com/](https://www.loggly.com/)
-   [https://ohdear.app/](https://ohdear.app/)
-   [https://bugsnag.com](https://bugsnag.com/)
-   [https://sentry.io](https://sentry.io/)

# Prometheus

## Alternative

-   [https://thanos.io/](https://thanos.io/)
-   [https://cortexmetrics.io/](https://cortexmetrics.io/)
-   [https://grafana.com/oss/mimir/](https://grafana.com/oss/mimir/)
-   [https://victoriametrics.com/](https://victoriametrics.com/)

## Tools

-   Load generator → [https://github.com/prometheus-community/avalanche](https://github.com/prometheus-community/avalanche)

## Exporters

-   [https://github.com/fstab/grok\_exporter/blob/master/CONFIG.md](https://github.com/fstab/grok_exporter/blob/master/CONFIG.md)
-   [https://github.com/Lusitaniae/apache\_exporter](https://github.com/Lusitaniae/apache_exporter)
-   [https://hub.docker.com/r/palobo/grok\_exporter](https://hub.docker.com/r/palobo/grok_exporter)
-   [https://github.com/prometheus/mysqld\_exporter](https://github.com/prometheus/mysqld_exporter)

## Alerts

-   [https://monitoring.mixins.dev/](https://monitoring.mixins.dev/)
-   [https://samber.github.io/awesome-prometheus-alerts/](https://samber.github.io/awesome-prometheus-alerts/)

## Resources

-   [https://coralogix.com/blog/prometheus-federation-with-thanos-how-does-thanos-work/](https://coralogix.com/blog/prometheus-federation-with-thanos-how-does-thanos-work/)
-   [https://medium.com/everything-full-stack/what-makes-victoriametrics-the-new-de-facto-standard-choice-for-open-source-monitoring-5d2b66b6e292](https://medium.com/everything-full-stack/what-makes-victoriametrics-the-new-de-facto-standard-choice-for-open-source-monitoring-5d2b66b6e292)
-   [https://elastisys.com/long-term-metrics-storage-thanos-vs-cortex-vs-influxdb-vs-m3db-vs-victoriametrics-vs-timescaledb/amp/](https://elastisys.com/long-term-metrics-storage-thanos-vs-cortex-vs-influxdb-vs-m3db-vs-victoriametrics-vs-timescaledb/amp/)
-   [https://medium.com/everything-full-stack/what-makes-victoriametrics-the-new-de-facto-standard-choice-for-open-source-monitoring-5d2b66b6e292](https://medium.com/everything-full-stack/what-makes-victoriametrics-the-new-de-facto-standard-choice-for-open-source-monitoring-5d2b66b6e292)
-   Remove write only some of metrics → [https://stackoverflow.com/questions/56155339/how-to-remote-write-only-a-subset-of-all-scraped-metrics-in-prometheus](https://stackoverflow.com/questions/56155339/how-to-remote-write-only-a-subset-of-all-scraped-metrics-in-prometheus)

# Logovani

## Loki

-   [https://github.com/grafana/loki/issues/6062](https://github.com/grafana/loki/issues/6062)
-   [https://prometheus.io/docs/prometheus/latest/configuration/configuration/#docker\_sd\_config](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#docker_sd_config)
-   [https://github.com/grafana/loki/issues/6165](https://github.com/grafana/loki/issues/6165)
-   [https://abhiraj2001.medium.com/monitoring-docker-containers-with-grafana-loki-and-promtail-4302a9417c0d](https://abhiraj2001.medium.com/monitoring-docker-containers-with-grafana-loki-and-promtail-4302a9417c0d)
-   [https://github.com/grafana/loki/blob/main/production/docker/docker-compose.yaml](https://github.com/grafana/loki/blob/main/production/docker/docker-compose.yaml)
-   [https://atodorov.me/2021/07/09/logging-on-nomad-and-log-aggregation-with-loki/](https://atodorov.me/2021/07/09/logging-on-nomad-and-log-aggregation-with-loki/)
-   [https://awesomeprogrammer.com/blog/2022/06/09/logging-on-nomad-with-loki-and-grafana-cloud/](https://awesomeprogrammer.com/blog/2022/06/09/logging-on-nomad-with-loki-and-grafana-cloud/)
-   [https://stackoverflow.com/questions/70777336/loki-query-to-show-all-logs](https://stackoverflow.com/questions/70777336/loki-query-to-show-all-logs)
-   [https://discuss.hashicorp.com/t/hashicorp-nomad-docker-plugin-fluentd/57810](https://discuss.hashicorp.com/t/hashicorp-nomad-docker-plugin-fluentd/57810)
-   [https://stackoverflow.com/questions/73023282/how-to-search-multiple-strings-in-same-entry-in-loki](https://stackoverflow.com/questions/73023282/how-to-search-multiple-strings-in-same-entry-in-loki)
-   [https://developer.hashicorp.com/nomad/docs/drivers/docker](https://developer.hashicorp.com/nomad/docs/drivers/docker)
-   [https://community.grafana.com/t/how-to-set-a-default-value-for-a-variable/9540/3](https://community.grafana.com/t/how-to-set-a-default-value-for-a-variable/9540/3)
-   [https://github.com/grafana/loki/issues/12262](https://github.com/grafana/loki/issues/12262)
-   [https://abhiraj2001.medium.com/monitoring-docker-containers-with-grafana-loki-and-promtail-4302a9417c0d](https://abhiraj2001.medium.com/monitoring-docker-containers-with-grafana-loki-and-promtail-4302a9417c0d)
-   [https://stackoverflow.com/questions/71151453/correct-way-to-parse-docker-json-logs-in-promtail](https://stackoverflow.com/questions/71151453/correct-way-to-parse-docker-json-logs-in-promtail)
-   [https://grafana.com/docs/loki/latest/send-data/promtail/](https://grafana.com/docs/loki/latest/send-data/promtail/)
-   [https://medium.com/django-unleashed/get-visibility-into-your-docker-container-logs-with-grafana-loki-of-a-django-application-9584bddfe540](https://medium.com/django-unleashed/get-visibility-into-your-docker-container-logs-with-grafana-loki-of-a-django-application-9584bddfe540)
-   [https://www.saboit.de/blog/docker-log-plugin-loki-and-docker-container-logging](https://www.saboit.de/blog/docker-log-plugin-loki-and-docker-container-logging)
-   [https://yuriktech.com/2020/03/21/Collecting-Docker-Logs-With-Loki/](https://yuriktech.com/2020/03/21/Collecting-Docker-Logs-With-Loki/)
-   [https://dev.to/justinepdevasia/docker-log-observability-analyzing-container-logs-in-hashicorp-nomad-with-vector-loki-and-grafana-4dp4](https://dev.to/justinepdevasia/docker-log-observability-analyzing-container-logs-in-hashicorp-nomad-with-vector-loki-and-grafana-4dp4)
-   [https://awesomeprogrammer.com/blog/2022/06/09/logging-on-nomad-with-loki-and-grafana-cloud/](https://awesomeprogrammer.com/blog/2022/06/09/logging-on-nomad-with-loki-and-grafana-cloud/)
-   [https://atodorov.me/2021/07/09/logging-on-nomad-and-log-aggregation-with-loki/](https://atodorov.me/2021/07/09/logging-on-nomad-and-log-aggregation-with-loki/)
-   [https://blog.mei-home.net/](https://blog.mei-home.net/)
-   [https://stackoverflow.com/questions/65994928/docker-containers-not-logging-to-loki-using-loki-log-driver](https://stackoverflow.com/questions/65994928/docker-containers-not-logging-to-loki-using-loki-log-driver)
-   [https://discuss.hashicorp.com/t/reading-docker-containers-with-docker-sock-in-nomad/66235](https://discuss.hashicorp.com/t/reading-docker-containers-with-docker-sock-in-nomad/66235)
-   [https://ornlu-is.github.io/docker\_compose\_promtail\_loki\_grafana/](https://ornlu-is.github.io/docker_compose_promtail_loki_grafana/)
-   [https://docs.docker.com/engine/logging/configure/](https://docs.docker.com/engine/logging/configure/)
-   [https://www.reddit.com/r/selfhosted/comments/1bn6hwj/getting\_docker\_logs\_into\_loki\_without\_the\_driver/](https://www.reddit.com/r/selfhosted/comments/1bn6hwj/getting_docker_logs_into_loki_without_the_driver/)
-   [https://github.com/grafana/loki/issues/6165](https://github.com/grafana/loki/issues/6165)
-   [https://docs.victoriametrics.com/sd\_configs/#nomad\_sd\_configs](https://docs.victoriametrics.com/sd_configs/#nomad_sd_configs)
-   [https://discuss.hashicorp.com/t/general-recommendations-for-logging/40012](https://discuss.hashicorp.com/t/general-recommendations-for-logging/40012)
-   [https://docs.victoriametrics.com/victorialogs/data-ingestion/promtail/](https://docs.victoriametrics.com/victorialogs/data-ingestion/promtail/)
-   [https://muditmathur121.medium.com/sending-docker-logs-to-grafana-b8d30f88290a](https://muditmathur121.medium.com/sending-docker-logs-to-grafana-b8d30f88290a)
-   [https://stackoverflow.com/questions/77627879/docker-volume-to-keep-loki-config-and-data-files](https://stackoverflow.com/questions/77627879/docker-volume-to-keep-loki-config-and-data-files)
-   [https://www.saboit.de/blog/docker-log-plugin-loki-and-docker-container-logging](https://www.saboit.de/blog/docker-log-plugin-loki-and-docker-container-logging)
-   [https://cylab.be/blog/241/use-loki-to-monitor-the-logs-of-your-docker-compose-application](https://cylab.be/blog/241/use-loki-to-monitor-the-logs-of-your-docker-compose-application)
-   [https://dev.to/nfrankel/send-your-logs-to-loki-2ko3](https://dev.to/nfrankel/send-your-logs-to-loki-2ko3)
-   [https://vector.dev/docs/reference/configuration/sources/docker\_logs/#examples-dummy-logs](https://vector.dev/docs/reference/configuration/sources/docker_logs/#examples-dummy-logs)
-   [https://github.com/tfabritz/logs-docker-vector-loki-grafana/tree/main?tab=readme-ov-file](https://github.com/tfabritz/logs-docker-vector-loki-grafana/tree/main?tab=readme-ov-file)
-   [https://medium.com/@johanesmistrialdo/simple-multinode-multidrive-minio-deployment-f23e09906db1](https://medium.com/@johanesmistrialdo/simple-multinode-multidrive-minio-deployment-f23e09906db1)
-   [https://medium.com/techielife/how-to-create-a-multi-node-object-storage-cluster-c2408af0b37f](https://medium.com/techielife/how-to-create-a-multi-node-object-storage-cluster-c2408af0b37f)
-   [https://grafana.com/docs/loki/latest/send-data/promtail/configuration/](https://grafana.com/docs/loki/latest/send-data/promtail/configuration/)
-   [https://github.com/livioribeiro/nomad-lxd-ansible/blob/master/terraform/jobs/loki.nomad.hcl](https://github.com/livioribeiro/nomad-lxd-ansible/blob/master/terraform/jobs/loki.nomad.hcl)
-   [https://stackoverflow.com/questions/77179272/how-to-add-a-new-node-in-a-existing-minio-cluster](https://stackoverflow.com/questions/77179272/how-to-add-a-new-node-in-a-existing-minio-cluster)
-   [https://medium.com/@svenvanginkel/log-monitoring-with-grafana-loki-promtail-6750f7cf077f](https://medium.com/@svenvanginkel/log-monitoring-with-grafana-loki-promtail-6750f7cf077f)
-   [https://serverfault.com/questions/1149738/setup-with-promtail-loki-grafana-is-not-showing-any-log-data](https://serverfault.com/questions/1149738/setup-with-promtail-loki-grafana-is-not-showing-any-log-data)
-   [https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/aggregatingmergetree](https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/aggregatingmergetree)
-   [https://blog.palark.com/vector-to-export-pgsql-logs-into-prometheus/](https://blog.palark.com/vector-to-export-pgsql-logs-into-prometheus/)
-   [https://medium.com/datadenys/using-vector-to-feed-nginx-logs-to-clickhouse-in-real-time-197745d9e88b](https://medium.com/datadenys/using-vector-to-feed-nginx-logs-to-clickhouse-in-real-time-197745d9e88b)
-   [https://clickhouse.com/docs/en/integrations/vector](https://clickhouse.com/docs/en/integrations/vector)
-   [https://vector.dev/docs/reference/configuration/transforms/log\_to\_metric/](https://vector.dev/docs/reference/configuration/transforms/log_to_metric/)
-   [https://www.sumologic.com/blog/apache-access-log/](https://www.sumologic.com/blog/apache-access-log/)
-   [https://ruan.dev/blog/2020/04/25/nginx-metrics-on-prometheus-with-the-nginx-log-exporter](https://ruan.dev/blog/2020/04/25/nginx-metrics-on-prometheus-with-the-nginx-log-exporter)
-   [https://betterstack.com/community/guides/logging/vector-explained/](https://betterstack.com/community/guides/logging/vector-explained/)
-   [https://last9.io/blog/building-logs-to-metrics-pipelines-with-vector/](https://last9.io/blog/building-logs-to-metrics-pipelines-with-vector/)
-   [https://last9.io/blog/what-is-prometheus-remote-write/](https://last9.io/blog/what-is-prometheus-remote-write/)
-   [https://stackoverflow.com/questions/73784501/how-can-you-check-the-value-of-a-metric-in-vetor-dev-unit-tests](https://stackoverflow.com/questions/73784501/how-can-you-check-the-value-of-a-metric-in-vetor-dev-unit-tests)
-   [https://vector.dev/docs/reference/configuration/transforms/metric\_to\_log/](https://vector.dev/docs/reference/configuration/transforms/metric_to_log/)
-   [https://medium.com/adidoescode/improving-your-observability-creating-metrics-from-your-logs-9ae8de9299f4](https://medium.com/adidoescode/improving-your-observability-creating-metrics-from-your-logs-9ae8de9299f4)
-   [https://blog.palark.com/vector-to-export-pgsql-logs-into-prometheus/](https://blog.palark.com/vector-to-export-pgsql-logs-into-prometheus/)
-   [https://medium.com/lonto-digital-services-integrator/grafana-loki-configuration-nuances-2e9b94da4ac1](https://medium.com/lonto-digital-services-integrator/grafana-loki-configuration-nuances-2e9b94da4ac1)
-   [https://play.grafana.org/d/T512JVH7z/loki-nginx-service-mesh-json-version?orgId=1](https://play.grafana.org/d/T512JVH7z/loki-nginx-service-mesh-json-version?orgId=1)
-   [https://grafana.com/grafana/dashboards/17781-loki-metrics-dashboard/](https://grafana.com/grafana/dashboards/17781-loki-metrics-dashboard/)
-   [https://github.com/kangaroot/rootstack-devfactory/blob/main/playbooks/roles/promtail/templates/promtail.yaml.j2](https://github.com/kangaroot/rootstack-devfactory/blob/main/playbooks/roles/promtail/templates/promtail.yaml.j2)
-   [https://github.com/krarey/nomad-homelab/blob/main/prometheus/promtail.nomad](https://github.com/krarey/nomad-homelab/blob/main/prometheus/promtail.nomad)
