import { Grid, Image } from '@mantine/core';

import tsIcon from '../../../assets/svg/ts.svg';
import reactIcon from '../../../assets/svg/react.svg';
import postgresqlIcon from '../../../assets/svg/postgresql.svg';
import nodejsIcon from '../../../assets/svg/nodejs.svg';
import nextjsIcon from '../../../assets/svg/nextjs.svg';
import mongodbIcon from '../../../assets/svg/mongodb.svg';
import mdIcon from '../../../assets/svg/md.svg';
import linuxIcon from '../../../assets/svg/linux.svg';
import htmlIcon from '../../../assets/svg/html.svg';
import dockerIcon from '../../../assets/svg/docker.svg';
import cssIcon from '../../../assets/svg/css.svg';
import nestjsIcon from '../../../assets/svg/nestjs.svg';
import golangIcon from '../../../assets/svg/golang.svg';
import pythonIcon from '../../../assets/svg/python.svg';
import jqueryIcon from '../../../assets/svg/jquery.svg';
import reduxIcon from '../../../assets/svg/redux.svg';
import jsIcon from '../../../assets/svg/js.svg';
import flaskIcon from '../../../assets/svg/flask.svg';
import mysqlIcon from '../../../assets/svg/mysql.svg';
import gitIcon from '../../../assets/svg/git.svg';

function TabDataContent() {
  return (
    <Grid>
      <Grid.Col span={1}>
        <Image
          src={tsIcon}
          alt='Typescript'
        />
      </Grid.Col>
      <Grid.Col span={1}>
        <Image
          src={jsIcon}
          alt='Javascript'
        />
      </Grid.Col>
      <Grid.Col span={1}>
        <Image
          src={reactIcon}
          alt='React'
        />
      </Grid.Col>
      <Grid.Col span={1}>
        <Image
          src={reduxIcon}
          alt='Redux'
        />
      </Grid.Col>
      <Grid.Col span={1}>
        <Image
          src={nextjsIcon}
          alt='NextJs'
        />
      </Grid.Col>
      <Grid.Col span={1}>
        <Image
          src={nodejsIcon}
          alt='NodeJs'
        />
      </Grid.Col>
      <Grid.Col span={1}>
        <Image
          src={postgresqlIcon}
          alt='PostgreSQL'
        />
      </Grid.Col>
      <Grid.Col span={1}>
        <Image
          src={mongodbIcon}
          alt='MongoDB'
        />
      </Grid.Col>
      <Grid.Col span={1}>
        <Image
          src={mysqlIcon}
          alt='MySQL'
        />
      </Grid.Col>
      <Grid.Col span={1}>
        <Image
          src={mdIcon}
          alt='Markdown'
        />
      </Grid.Col>
      <Grid.Col span={1}>
        <Image
          src={linuxIcon}
          alt='Linux'
        />
      </Grid.Col>
      <Grid.Col span={1}>
        <Image
          src={htmlIcon}
          alt='HTML5'
        />
      </Grid.Col>
      <Grid.Col span={1}>
        <Image
          src={cssIcon}
          alt='CSS3'
        />
      </Grid.Col>
      <Grid.Col span={1}>
        <Image
          src={dockerIcon}
          alt='Docker'
        />
      </Grid.Col>
      <Grid.Col span={1}>
        <Image
          src={nestjsIcon}
          alt='NestJs'
        />
      </Grid.Col>
      <Grid.Col span={1}>
        <Image
          src={golangIcon}
          alt='Golang'
        />
      </Grid.Col>
      <Grid.Col span={1}>
        <Image
          src={pythonIcon}
          alt='Python'
        />
      </Grid.Col>
      <Grid.Col span={1}>
        <Image
          src={flaskIcon}
          alt='Flask'
        />
      </Grid.Col>
      <Grid.Col span={1}>
        <Image
          src={jqueryIcon}
          alt='Python'
        />
      </Grid.Col>
      <Grid.Col span={1}>
        <Image
          src={gitIcon}
          alt='Git'
        />
      </Grid.Col>
    </Grid>
  );
}

export default TabDataContent;
