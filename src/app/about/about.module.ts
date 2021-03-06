import { Module } from '@rxdi/core';
import { AboutComponent } from './about.component';
import { RouterModule } from '@rxdi/router';

@Module({
  imports: [
    RouterModule.forChild([
      {
        path: '/',
        component: AboutComponent
      }
    ])
  ]
})
export class AboutModule {}
