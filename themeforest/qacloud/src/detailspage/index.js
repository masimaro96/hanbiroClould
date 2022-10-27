import React from 'react';
import Computebaremetalpage from './Page/compute-bare-metal';
import Computevps from './Page/compute-vps';
import Computeautoscale from './Page/compute-auto-scale';
import Computeloadbalance from './Page/compute-load-balance';
import Computedatabase from './Page/compute-database';
import Computems from './Page/compute-ms';
import Clustercloudelasticsearch from './Page/cluster-cloud-elastic-search';
import Clusterkafka from './Page/cluster-kafka';
import Clustercloudrabbitmq from './Page/cluster-cloud-rabbitmq';
import Clustercloudmysqldb from './Page/cluster-cloud-mysql-db';
import Clustercloudpostgresqldb from './Page/cluster-cloud-postgresql-db';
import Clustercloudvitess from './Page/cluster-cloud-vitess';
import Clustercloudmongodb from './Page/cluster-cloud-mongodb';
import Clustercloudredis from './Page/cluster-cloud-redis';
import Clustercloudscylladb from './Page/cluster-cloud-scylladb';
import Clusterclickhouse from './Page/cluster-clickhouse';
import Storeobjectstore from './Page/store-object-store';
import Storeblockstore from './Page/store-block-store';
import Storenasstore from './Page/store-nas-store';


const Pagedetails = () => {

    return (
        <header>
            <Computevps />
            <Computebaremetalpage />
            <Computeautoscale />
            <Computeloadbalance />
            <Computedatabase />

            <Computems />
            <Clustercloudelasticsearch />
            <Clusterkafka />
            <Clustercloudrabbitmq />
            <Clustercloudmysqldb />
            <Clustercloudpostgresqldb />
            <Clustercloudvitess />
            <Clustercloudmongodb />
            <Clustercloudredis />
            <Clustercloudscylladb />

            <Clusterclickhouse />
            <Storeobjectstore />
            <Storeblockstore />
            <Storenasstore />

        </header>


    );
};

export default Pagedetails;