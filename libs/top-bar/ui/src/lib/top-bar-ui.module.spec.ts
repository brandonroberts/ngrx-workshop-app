import { async, TestBed } from '@angular/core/testing';
import { TopBarUiModule } from './top-bar-ui.module';

describe('TopBarUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TopBarUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TopBarUiModule).toBeDefined();
  });
});
