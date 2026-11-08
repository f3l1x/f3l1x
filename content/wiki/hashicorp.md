---
title: "Hashicorp"
date: "2022-05-13"
updated: "2025-03-11"
description: "Links and notes on HashiCorp tools, mostly Nomad (Terraform modules, templating, networking, CSI), with sections on Packer and Terraform."
status: ["Not started"]
source: "https://f3l1x.super.site/wiki/hashicorp"
---

# Nomad

-   [https://github.com/input-output-hk/bitte](https://github.com/input-output-hk/bitte)
-   [https://github.com/dsaidgovsg/terraform-modules/blob/master/roles/nomad/files/configure.sh](https://github.com/dsaidgovsg/terraform-modules/blob/master/roles/nomad/files/configure.sh)
-   [https://github.com/picatz/terraform-google-nomad](https://github.com/picatz/terraform-google-nomad)
-   [https://github.com/MatthiasScholz/cos/tree/master/modules/ami2/run-nomad](https://github.com/MatthiasScholz/cos/tree/master/modules/ami2/run-nomad)
-   [https://github.com/perrymanuk/hashi-homelab](https://github.com/perrymanuk/hashi-homelab)
-   [https://github.com/dokku/dokku-scheduler-nomad/blob/master/Vagrantfile](https://github.com/dokku/dokku-scheduler-nomad/blob/master/Vagrantfile)
-   [https://portworx.com/blog/portworx-container-native-csi-driver-for-nomad/](https://portworx.com/blog/portworx-container-native-csi-driver-for-nomad/)
-   [https://www.nomadproject.io/docs/job-specification/csi\_plugin](https://www.nomadproject.io/docs/job-specification/csi_plugin)
-   [https://www.nomadproject.io/docs/commands/volume/register](https://www.nomadproject.io/docs/commands/volume/register)
-   [https://github.com/GuyBarros/terraform-aws-demostack/blob/master/modules/templates/workers/ebs\_volumes.sh](https://github.com/GuyBarros/terraform-aws-demostack/blob/master/modules/templates/workers/ebs_volumes.sh)
-   [https://github.com/hashicorp/field-workshops-nomad/blob/main/instruqt-tracks/nomad-and-csi-plugins-gcp/create-persistent-disk/solve-cloud-client](https://github.com/hashicorp/field-workshops-nomad/blob/main/instruqt-tracks/nomad-and-csi-plugins-gcp/create-persistent-disk/solve-cloud-client)
-   [https://github.com/hashicorp/nomad/blob/main/demo/csi/cinder-csi-plugin/README.md](https://github.com/hashicorp/nomad/blob/main/demo/csi/cinder-csi-plugin/README.md)
-   [https://github.com/hashicorp/field-workshops-nomad/blob/main/instruqt-tracks/nomad-and-csi-plugins-gcp/track.yml](https://github.com/hashicorp/field-workshops-nomad/blob/main/instruqt-tracks/nomad-and-csi-plugins-gcp/track.yml)
-   [https://github.com/democratic-csi/democratic-csi/blob/master/docs/Nomad/examples/volume-nfs.hcl](https://github.com/democratic-csi/democratic-csi/blob/master/docs/Nomad/examples/volume-nfs.hcl)
-   [https://github.com/pete0emerson/hashipoc](https://github.com/pete0emerson/hashipoc)
-   [https://github.com/fhemberger/nomad-demo](https://github.com/fhemberger/nomad-demo)
-   [https://github.com/leowmjw/nomad-samples](https://github.com/leowmjw/nomad-samples)
-   [https://github.com/hashicorp/demo-nomad-101](https://github.com/hashicorp/demo-nomad-101)
-   [https://admantium.medium.com/persisting-data-with-nomad-f98754753c0e](https://admantium.medium.com/persisting-data-with-nomad-f98754753c0e)
-   [https://starbeamrainbowlabs.com/blog/article.php?article=posts/420-cluster-8-nfs-nomad-registry.html](https://starbeamrainbowlabs.com/blog/article.php?article=posts/420-cluster-8-nfs-nomad-registry.html)
-   [https://grep.app/search?q=docker.auth.config](https://grep.app/search?q=docker.auth.config)
-   [https://hashicorp.github.io/field-workshops-nomad/slides/multi-cloud/nomad-oss/#17](https://hashicorp.github.io/field-workshops-nomad/slides/multi-cloud/nomad-oss/#17)
-   [https://www.youtube.com/watch?v=lgutRD\_0jTg](https://www.youtube.com/watch?v=lgutRD_0jTg)
-   [https://danielabaron.me/blog/nomad-tips-and-tricks/](https://danielabaron.me/blog/nomad-tips-and-tricks/)
-   [https://tech-blog.jtp.co.jp/entry/2022/02/17/175711](https://tech-blog.jtp.co.jp/entry/2022/02/17/175711)
-   [https://mpolinowski.github.io/docs/DevOps/Hashicorp/2021-10-10--hashicorp-nomad-in-production/2021-10-10](https://mpolinowski.github.io/docs/DevOps/Hashicorp/2021-10-10--hashicorp-nomad-in-production/2021-10-10)
-   [https://janma.tk/2021-01-10/nomad-deploy-systemd-units/](https://janma.tk/2021-01-10/nomad-deploy-systemd-units/)
-   [https://groups.google.com/g/nomad-tool/c/SJXKNO8qvYs](https://groups.google.com/g/nomad-tool/c/SJXKNO8qvYs)
-   [https://danielabaron.me/blog/nomad-tips-and-tricks/](https://danielabaron.me/blog/nomad-tips-and-tricks/)
-   [https://hashiqube.com/?id=installation-instructions](https://hashiqube.com/?id=installation-instructions)
-   [https://github.com/jsiebens/hashi-up](https://github.com/jsiebens/hashi-up)
-   [https://discuss.hashicorp.com/t/local-nomad-cluster-using-vagrant/33067/3](https://discuss.hashicorp.com/t/local-nomad-cluster-using-vagrant/33067/3)

## Variables + Templating

-   [https://github.com/theztd/startup-infra-docker/blob/e796c314aa3b4b3ac7611e8f84229cd275841491/files/jobs/grafana.hcl](https://github.com/theztd/startup-infra-docker/blob/e796c314aa3b4b3ac7611e8f84229cd275841491/files/jobs/grafana.hcl)
-   [https://github.com/hyperbadger/nomad-pipeline/blob/a7e234ea8ff38090b6bd92e2b12d1066c9121e72/examples/leader-task-group.hcl](https://github.com/hyperbadger/nomad-pipeline/blob/a7e234ea8ff38090b6bd92e2b12d1066c9121e72/examples/leader-task-group.hcl)
-   [https://github.com/mxab/nacp/blob/a837d409249fe298018f883c0ef1bc42d4517c1c/misc/hashitalk\_deploy2023/job\_history.hcl](https://github.com/mxab/nacp/blob/a837d409249fe298018f883c0ef1bc42d4517c1c/misc/hashitalk_deploy2023/job_history.hcl)
-   [https://github.com/kencx/homelab/blob/259e2c824b9ec79b1b49f4588fd15e44b57fac26/terraform/nomad/main.tf](https://github.com/kencx/homelab/blob/259e2c824b9ec79b1b49f4588fd15e44b57fac26/terraform/nomad/main.tf)
-   [https://github.com/SebastianUA/terraform/blob/ff2450c48b619f0a66658140a5f2448dfcbc8d54/consul/modules/consul\_prepared\_query/prepared\_query.tf](https://github.com/SebastianUA/terraform/blob/ff2450c48b619f0a66658140a5f2448dfcbc8d54/consul/modules/consul_prepared_query/prepared_query.tf)
-   [https://github.com/natelandau/ansible-homelab-config/blob/846fb2bc31540e27cd337dea430b5b1230cd429f/templates/nomad\_jobs/syncthing.hcl](https://github.com/natelandau/ansible-homelab-config/blob/846fb2bc31540e27cd337dea430b5b1230cd429f/templates/nomad_jobs/syncthing.hcl)

## Networking

-   [https://medium.com/hashicorp-engineering/global-service-mesh-by-consul-using-mesh-ingress-terminating-gateway-a4f13a01b960](https://medium.com/hashicorp-engineering/global-service-mesh-by-consul-using-mesh-ingress-terminating-gateway-a4f13a01b960)
-   [https://medium.com/@rocky.bhatia86/load-balancer-vs-reverse-proxy-vs-forward-proxy-vs-api-gateway-cb3f5778057a](https://medium.com/@rocky.bhatia86/load-balancer-vs-reverse-proxy-vs-forward-proxy-vs-api-gateway-cb3f5778057a)
-   [https://blog.envoyproxy.io/service-mesh-data-plane-vs-control-plane-2774e720f7fc](https://blog.envoyproxy.io/service-mesh-data-plane-vs-control-plane-2774e720f7fc)
-   [https://iximiuz.com/en/posts/service-proxy-pod-sidecar-oh-my/](https://iximiuz.com/en/posts/service-proxy-pod-sidecar-oh-my/)
-   [https://developer.hashicorp.com/nomad/docs/networking](https://developer.hashicorp.com/nomad/docs/networking)
-   [https://mrkaran.dev/posts/nomad-networking-explained/](https://mrkaran.dev/posts/nomad-networking-explained/)
-   [https://medium.com/navin-nair/practical-hashicorp-nomad-and-consul-a-little-more-than-hello-world-part-1-991d2a54fd64](https://medium.com/navin-nair/practical-hashicorp-nomad-and-consul-a-little-more-than-hello-world-part-1-991d2a54fd64)
-   [https://developer.hashicorp.com/consul/tutorials/get-started-vms/virtual-machine-gs-service-mesh](https://developer.hashicorp.com/consul/tutorials/get-started-vms/virtual-machine-gs-service-mesh)
-   [https://medium.com/hashicorp-engineering/global-service-mesh-by-consul-using-mesh-ingress-terminating-gateway-a4f13a01b960](https://medium.com/hashicorp-engineering/global-service-mesh-by-consul-using-mesh-ingress-terminating-gateway-a4f13a01b960)
-   [https://medium.com/hashicorp-engineering/the-trouble-with-service-mesh-6b0336964323](https://medium.com/hashicorp-engineering/the-trouble-with-service-mesh-6b0336964323)
-   [https://medium.com/hashicorp-engineering/global-service-mesh-by-consul-using-mesh-ingress-terminating-gateway-a4f13a01b960](https://medium.com/hashicorp-engineering/global-service-mesh-by-consul-using-mesh-ingress-terminating-gateway-a4f13a01b960)
-   [https://tyk.io/blog/res-service-proxy-service-mesh-or-api-gateway-which-do-you-need/](https://tyk.io/blog/res-service-proxy-service-mesh-or-api-gateway-which-do-you-need/)
-   [https://medium.com/swlh/container-patterns-for-micro-services-with-nomad-7c60e9a13e57](https://medium.com/swlh/container-patterns-for-micro-services-with-nomad-7c60e9a13e57)
-   [https://blog.thecloudside.com/deploying-a-nomad-cluster-on-a-vm-managing-web-applications-with-a-load-balancer-4645240c9965](https://blog.thecloudside.com/deploying-a-nomad-cluster-on-a-vm-managing-web-applications-with-a-load-balancer-4645240c9965)
-   [https://medium.com/swlh/container-patterns-for-micro-services-with-nomad-7c60e9a13e57](https://medium.com/swlh/container-patterns-for-micro-services-with-nomad-7c60e9a13e57)

# Packer

-   [https://blog.james-carr.org/build-docker-images-with-packer-and-ansible-3f40b734ef4f](https://blog.james-carr.org/build-docker-images-with-packer-and-ansible-3f40b734ef4f)
-   [https://alex.dzyoba.com/blog/packer-for-docker/](https://alex.dzyoba.com/blog/packer-for-docker/)
-   [https://dev.to/david\_j\_eddy/intro-hashicorp-packer-la9](https://dev.to/david_j_eddy/intro-hashicorp-packer-la9)
-   [https://ixis.co.uk/blog/pack-it-packaging-docker-images-packer](https://ixis.co.uk/blog/pack-it-packaging-docker-images-packer)
-   [https://medium.com/krakensystems-blog/cut-bake-and-pack-build-machine-images-with-docker-apps-using-hashicorps-packer-b096a17329f0](https://medium.com/krakensystems-blog/cut-bake-and-pack-build-machine-images-with-docker-apps-using-hashicorps-packer-b096a17329f0)

# Terraform

-   [https://markontech.com/posts/use-minio-as-a-backend-for-terraform-remote-state/](https://markontech.com/posts/use-minio-as-a-backend-for-terraform-remote-state/)
-   [https://pet2cattle.com/2021/06/minio-backend-terraform](https://pet2cattle.com/2021/06/minio-backend-terraform)
-   [https://ruben-rodriguez.github.io/posts/minio-s3-terraform-backend/](https://ruben-rodriguez.github.io/posts/minio-s3-terraform-backend/)
