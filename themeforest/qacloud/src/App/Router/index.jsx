import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import App from "../App";
import Clustercloudelasticsearch from "../../detailspage/Page/cluster-cloud-elastic-search";
import Clusterkafka  from "../../detailspage/Page/cluster-kafka";
import Clustercloudrabbitmq  from "../../detailspage/Page/cluster-cloud-rabbitmq";
import Clustercloudmysqldb  from "../../detailspage/Page/cluster-cloud-mysql-db";
import Clustercloudpostgresqldb  from "../../detailspage/Page/cluster-cloud-postgresql-db";
import Clustercloudvitess  from "../../detailspage/Page/cluster-cloud-vitess";
import Clustercloudmongodb  from "../../detailspage/Page/cluster-cloud-mongodb";
import Clustercloudredis  from "../../detailspage/Page/cluster-cloud-redis";
import Clustercloudscylladb  from "../../detailspage/Page/cluster-cloud-scylladb";
import Clusterclickhouse  from "../../detailspage/Page/cluster-clickhouse";
import Storeblockstore  from "../../detailspage/Page/store-block-store";
import Storenasstore  from "../../detailspage/Page/store-nas-store";
import Storeobjectstore  from "../../detailspage/Page/store-object-store";
import Computeautoscale  from "../../detailspage/Page/compute-auto-scale";
import Computebaremetal  from "../../detailspage/Page/compute-bare-metal";
import Computedatabase  from "../../detailspage/Page/compute-database";
import Computevps  from "../../detailspage/Page/compute-vps";
import Computems  from "../../detailspage/Page/compute-ms";
import Computeloadbalance  from "../../detailspage/Page/compute-load-balance";
import MSA1 from "../../microservice/container/msa-1";
import MSA2 from "../../microservice/container/msa-2";


const RouteQaCloud = () => (
  <Switch>
    <HashRouter>
      <Route exact path="/" component={App} />
      <Route exact path="/cloud" component={App} />
      <Route exact path="/cloud/msa1" component={MSA1} />
      {/* Cloud */}
      <Route path="/cluster-cloud-elastic-search" component={Clustercloudelasticsearch} />
      <Route path="/cluster-kafka" component={Clusterkafka} />
      <Route path="/cluster-cloud-rabbitmq" component={Clustercloudrabbitmq} />
      <Route path="/cluster-cloud-mysql-db" component={Clustercloudmysqldb} />
      <Route path="/cluster-cloud-postgresql-db" component={Clustercloudpostgresqldb} />
      <Route path="/cluster-cloud-vitess" component={Clustercloudvitess} />
      <Route path="/cluster-cloud-mongodb" component={Clustercloudmongodb} />
      <Route path="/cluster-cloud-redis" component={Clustercloudredis} />
      <Route path="/cluster-cloud-scylladb" component={Clustercloudscylladb} />
      <Route path="/cluster-clickhouse" component={Clusterclickhouse} />
      {/* ----------- */}
      {/* Storage */}
      <Route path="/store-object-store" component={Storeobjectstore} />
      <Route path="/store-block-store" component={Storeblockstore} />
      <Route path="/store-nas-store" component={Storenasstore} />    
      {/* ----------- */}
      {/* Compute */}
      <Route path="/compute-vps" component={Computevps} />
      <Route path="/compute-bare-metal" component={Computebaremetal} />
      <Route path="/compute-auto-scale" component={Computeautoscale} />    
      <Route path="/compute-load-balance" component={Computeloadbalance} />    
      <Route path="/compute-ms" component={Computems} />    
      <Route path="/compute-database" component={Computedatabase} />    
      {/* ----------- */}
      {/* Microservice */}
      <Route path="/msa" component={MSA1} />
      <Route path="/msa1" component={MSA1} />
      <Route path="/msa2" component={MSA2} />
    </HashRouter>
  </Switch>
);

export default RouteQaCloud;
