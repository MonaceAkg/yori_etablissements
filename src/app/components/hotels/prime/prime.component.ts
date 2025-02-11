import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
// import { TicketService } from '@service/ticketservice';
import { Subscription } from 'rxjs';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { TicketService } from '../../../service/tikcket.service';
import { Header3Component } from "../../core/components/header3/header3.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-prime',
  standalone: true,
  imports: [RouterOutlet,StepsModule, ToastModule, Header3Component],
  providers: [MessageService, TicketService],
  templateUrl: './prime.component.html',
  styleUrl: './prime.component.css'
})
export class PrimeComponent implements OnInit{

  items: MenuItem[] | undefined;

    subscription: Subscription | undefined;

    constructor(public messageService: MessageService, public ticketService: TicketService) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Personal',
                routerLink: 'home'
            },
            {
                label: 'Seat',
                routerLink: 'seat'
            },
            {
                label: 'Payment',
                routerLink: 'payment'
            },
            {
                label: 'Confirmation',
                routerLink: 'confirmation'
            },
        ];

        this.subscription = this.ticketService.paymentComplete$.subscribe((personalInformation: { firstname: string; lastname: string; }) => {
            this.messageService.add({ severity: 'success', summary: 'Order submitted', detail: 'Dear, ' + personalInformation.firstname + ' ' + personalInformation.lastname + ' your order completed.' });
        });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
