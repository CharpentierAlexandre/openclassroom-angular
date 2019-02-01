import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

    @Input() postTitle: string;
    @Input() postContent: string;
    @Input() loveIt: number = 0;
    @Input() created_at: Date;
    
  constructor() {
      this.created_at = new Date();
  }

  ngOnInit() {
  }
  
  getTitle(){
      return this.postTitle;
  }
  
  setTitle(ttl: string){
      this.postTitle = ttl;
  }
  
  getContent(){
      return this.postContent;
  }
  
  setContent(ct: string){
      this.postContent = ct;
  }

  addLoveIt(){
      this.loveIt += 1;
  }
  
  minusLoveIt(){
      this.loveIt -=1;
  }
  
  resetLoveIt(){
      this.loveIt = 0;
  }
  
  getCreatedAt(){
      return this.created_at;
  }
  
}
