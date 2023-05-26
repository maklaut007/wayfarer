import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { posts} from '../data/posts';


@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
post: any;
postList: any = posts;


constructor(private route: ActivatedRoute){

}

ngOnInit() {
  this.route.paramMap.subscribe((params) => {
    this.post = this.postList.find((post: any) => {
      let paramId: string = params.get('id') || '';
      return post.id === parseInt(paramId);
    });
  });
}

}
