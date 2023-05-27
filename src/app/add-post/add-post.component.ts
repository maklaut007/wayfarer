import { Component, TemplateRef, Input } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from '../services/post.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  @Input() city: any | null 
  formData = this.formBuilder.group({id: Math.floor(Math.random() * 1000000), cityId: 0, title : '', author : '',
   date: new Date(), content : '', photo : ''})

	constructor(private offcanvasService: NgbOffcanvas, private postService: PostService, private formBuilder: FormBuilder) {}

	openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}

  onSubmit(): void {
    console.log(this.formData);
    this.formData.value.cityId = this.city.id
    this.postService.addPost(this.formData.value);

  }
}
