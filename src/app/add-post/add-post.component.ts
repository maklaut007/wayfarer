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
  /**
   * Gets city from parent component
   */
  @Input() city: any | null 
  /**
   * Creates an object to keep data from form 
   */
  formData = this.formBuilder.group({id: Math.floor(Math.random() * 1000000), cityId: 0, title : '', author : '',
   date: new Date(), content : '', photo : ''})

   
	constructor(private offcanvasService: NgbOffcanvas, private postService: PostService, private formBuilder: FormBuilder) {}

 /**
  * Opens form on post click event
  * @param content - Holds the form data
  */ 
	openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}

  /**
  * Triggers when form is submitted, and pushes any new posts to the service
  * 
  */
  onSubmit(): void {
    console.log(this.formData);
    if(this.formData.value.title && this.formData.value.title.length > 1) {
      this.formData.value.cityId = this.city.id
      this.postService.addPost(this.formData.value);
    } else {
      alert("Title length is too small")
    }
  }
}
