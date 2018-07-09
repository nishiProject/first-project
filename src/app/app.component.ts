import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  locations = ['Bangalore','Chennai','Hyderabad','Coimbatore','Salem','Madurai'];

  currencies = [ 'US Dollar', 'Euro','British Pound','Australian Dollar','Canadian Dollar','Singapore Dollar',
                'New Zealand Dollar','Hong Kong Dollar','UAE Dirham','Saudi Riyal','Swiss Franc','Japanese Yen',
                 'Swedish Krona','Thai Baht','Malaysian Ringgits','Chinese Yuan','South African Rand',
                 'Omani Rial','Bahraini Dinar','Kuwaiti Dinar','Norwegian Krone','Danish Krone','Indonesian Rupiah','Sri Lankan Rupee',
                  'Korean Won','Russian Ruble','Philippine Peso','Vietnam Dong','Mauritius Rupee','Bangladesh Taka'];

  productlist = ['CASH', 'Travellers Cheque', 'Forex Card'];
}
