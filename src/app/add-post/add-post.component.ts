import { Component, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {

	constructor(private offcanvasService: NgbOffcanvas) {}

	openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}

}
