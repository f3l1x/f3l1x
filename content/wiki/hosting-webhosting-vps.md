---
title: "Hosting / Webhosting / VPS"
description: "https://vercel.com/"
status: ["Not started"]
source: "https://f3l1x.super.site/wiki/hosting-webhosting-vps"
---

# Static

-   [https://vercel.com/](https://vercel.com/)
-   [https://www.netlify.com/](https://www.netlify.com/)
-   [https://surge.sh/](https://surge.sh/)
-   [https://pages.cloudflare.com/](https://pages.cloudflare.com/)

# Resources

-   [https://cloud-estimator.linode.com/s/](https://cloud-estimator.linode.com/s/)
-   [https://www.vultr.com/pricing/](https://www.vultr.com/pricing/)
-   [https://serverspace.io/pricing/](https://serverspace.io/pricing/)
-   [https://www.hetzner.com/cloud](https://www.hetzner.com/cloud)
-   [https://upcloud.com/pricing](https://upcloud.com/pricing)
-   [https://www.digitalocean.com/pricing/droplets](https://www.digitalocean.com/pricing/droplets)
-   [https://aws.amazon.com/ec2/pricing/on-demand/](https://aws.amazon.com/ec2/pricing/on-demand/)
-   [https://azure.microsoft.com/en-us/pricing/details/virtual-machines/linux/](https://azure.microsoft.com/en-us/pricing/details/virtual-machines/linux/?ef_id=_k_Cj0KCQjwocShBhCOARIsAFVYq0jb57UtrLQl1V6_IBuVta3yv2ijSLDKNteyGyqxjSgnMl9fkT86SkQaAjicEALw_wcB_k_&OCID=AIDcmm22fzqsrc_SEM_k_Cj0KCQjwocShBhCOARIsAFVYq0jb57UtrLQl1V6_IBuVta3yv2ijSLDKNteyGyqxjSgnMl9fkT86SkQaAjicEALw_wcB_k_&gclid=Cj0KCQjwocShBhCOARIsAFVYq0jb57UtrLQl1V6_IBuVta3yv2ijSLDKNteyGyqxjSgnMl9fkT86SkQaAjicEALw_wcB#pricing)
-   [https://www.alibabacloud.com/product/ecs?spm=a3c0i.7938564.8215766810.1.7781441eZWHlxa](https://www.alibabacloud.com/product/ecs?spm=a3c0i.7938564.8215766810.1.7781441eZWHlxa)
-   [https://cloud.google.com/products/calculator#id=e79a4750-972b-4395-8969-0fce8fb8f220](https://cloud.google.com/products/calculator#id=e79a4750-972b-4395-8969-0fce8fb8f220)
-   [https://www.scaleway.com/en/cost-optimized-instances/](https://www.scaleway.com/en/cost-optimized-instances/)
-   [https://cloudoptimizer.io/](https://cloudoptimizer.io/)
-   [https://www.flightcontrol.dev/](https://www.flightcontrol.dev/)
-   [https://zesty.co/](https://zesty.co/)
-   [https://lumigo.io/](https://lumigo.io/)
-   [https://holori.com/](https://holori.com/)
-   [https://www.withcoherence.com/](https://www.withcoherence.com/)
-   [https://www.time4vps.com](https://www.time4vps.com/)
-   [https://www.mvps.net/](https://www.mvps.net/)
-   [https://upcloud.com/](https://upcloud.com/)
-   [https://scaleway.com](https://scaleway.com/)
-   [http://ovh.com/](http://ovh.com/)
-   [https://www.linode.com/](https://www.linode.com/)
-   [https://vultr.com](https://vultr.com/)
-   [https://www.hetzner.com/cloud](https://www.hetzner.com/cloud)
-   [https://contabo.com/?show=vps](https://contabo.com/?show=vps)
-   [https://vpsfree.cz/](https://vpsfree.cz/)
-   [https://www.ssdnodes.com](https://www.ssdnodes.com/)
-   [https://www.hostingsprout.com/vultr-alternative/](https://www.hostingsprout.com/vultr-alternative/)
-   [https://www.ovh.cz/vps/vps-ssd.xml](https://www.ovh.cz/vps/vps-ssd.xml)
-   [https://www.vpsag.com/lightkvm](https://www.vpsag.com/lightkvm)
-   [https://www.scaleway.com/en/pricing/](https://www.scaleway.com/en/pricing/)
-   [https://thishosting.rocks/cheap-cloud-hosting-providers-comparison/](https://thishosting.rocks/cheap-cloud-hosting-providers-comparison/)
-   https://serverhunter.com
-   [https://thishosting.rocks/cheap-cloud-hosting-providers-comparison/](https://thishosting.rocks/cheap-cloud-hosting-providers-comparison/)
-   [https://www.scaleway.com/en/pricing/](https://www.scaleway.com/en/pricing/)

# Fly.io

## Migrace Postgres

```bash
export HEROKU_URL="postgres://[user]:[password]@[server]:5432/[db]"
export FLY_URL="postgres://[user]:[password]@[service].internal:5432/[db]"

pg_dump -Fc --no-acl --no-owner -d $HEROKU_URL | pg_restore --verbose --clean --no-acl --no-owner -d $FLY_URL
```
