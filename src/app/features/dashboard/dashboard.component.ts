import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  imports: [DatePipe, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  private readonly dashboardService = inject(
    DashboardService,
  );

  public readonly patientCount =
    this.dashboardService.patientCount;

  public readonly needsAttentionCount =
    this.dashboardService.needsAttentionCount;

  public readonly needsAttentionPatients =
    this.dashboardService.needsAttentionPatients;

  public readonly upcomingAppointments =
    this.dashboardService.upcomingAppointments;

  public readonly recentActivity =
    this.dashboardService.recentActivity;
}