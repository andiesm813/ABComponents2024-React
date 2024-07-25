import { IgrAvatar, IgrAvatarModule, IgrList, IgrListHeader, IgrListHeaderModule, IgrListItem, IgrListModule } from '@infragistics/igniteui-react';
import styles from './lists.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrListHeaderModule.register();
IgrListModule.register();

export default function Lists() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();

  return (
    <>
      <div className={classes("row-layout lists-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <IgrList className={classes("list")}>
              <IgrListHeader key={uuid()}>
                <div key={uuid()}>Header</div>
              </IgrListHeader>
              <IgrListItem key={uuid()}>
                <div slot="title" key={uuid()}>Single Line Item Default</div>
                <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>keyboard_arrow_right</span>
                </span>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div slot="title" key={uuid()}>Single Line Item Default</div>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div slot="title" key={uuid()}>Single Line Item Default</div>
                <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>keyboard_arrow_right</span>
                </span>
              </IgrListItem>
            </IgrList>
            <IgrList className={classes("list")}>
              <IgrListHeader key={uuid()}>
                <div key={uuid()}>Header</div>
              </IgrListHeader>
              <IgrListItem key={uuid()}>
                <div slot="subtitle" key={uuid()}>Subtitle...</div>
                <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>keyboard_arrow_right</span>
                </span>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div slot="subtitle" key={uuid()}>Subtitle...</div>
                <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>keyboard_arrow_right</span>
                </span>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div slot="subtitle" key={uuid()}>Subtitle...</div>
                <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>keyboard_arrow_right</span>
                </span>
              </IgrListItem>
            </IgrList>
            <IgrList className={classes("list")}>
              <IgrListHeader key={uuid()}>
                <div key={uuid()}>Header</div>
              </IgrListHeader>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>person</span>
                    </span>
                  </IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Single Line Item Default</div>
                <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>keyboard_arrow_right</span>
                </span>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>person</span>
                    </span>
                  </IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Single Line Item Default</div>
                <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>keyboard_arrow_right</span>
                </span>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>person</span>
                    </span>
                  </IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Single Line Item Default</div>
                <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>keyboard_arrow_right</span>
                </span>
              </IgrListItem>
            </IgrList>
            <IgrList className={classes("list")}>
              <IgrListHeader key={uuid()}>
                <div key={uuid()}>Header</div>
              </IgrListHeader>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar initials="AB" shape="rounded"></IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Single Line Item Default</div>
                <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>keyboard_arrow_right</span>
                </span>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar initials="AB" shape="rounded"></IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Single Line Item Default</div>
                <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>keyboard_arrow_right</span>
                </span>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar initials="AB" shape="rounded"></IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Single Line Item Default</div>
                <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>keyboard_arrow_right</span>
                </span>
              </IgrListItem>
            </IgrList>
          </div>
          <div className={classes("column-layout group_1")}>
            <IgrList className={classes("list")}>
              <IgrListHeader key={uuid()}>
                <div key={uuid()}>Header</div>
              </IgrListHeader>
              <IgrListItem key={uuid()}>
                <div slot="title" key={uuid()}>Image URL</div>
                <div slot="subtitle" key={uuid()}>Subtitle...</div>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div slot="title" key={uuid()}>Image URL</div>
                <div slot="subtitle" key={uuid()}>Subtitle...</div>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div slot="title" key={uuid()}>Image URL</div>
                <div slot="subtitle" key={uuid()}>Subtitle...</div>
              </IgrListItem>
            </IgrList>
            <IgrList className={classes("list")}>
              <IgrListHeader key={uuid()}>
                <div key={uuid()}>Header</div>
              </IgrListHeader>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" shape="circle" className={classes("avatar")}></IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Image URL</div>
                <div slot="subtitle" key={uuid()}>Subtitle...</div>
                <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>keyboard_arrow_right</span>
                </span>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" shape="circle" className={classes("avatar_1")}></IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Image URL</div>
                <div slot="subtitle" key={uuid()}>Subtitle...</div>
                <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>keyboard_arrow_right</span>
                </span>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" shape="circle" className={classes("avatar_2")}></IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Image URL</div>
                <div slot="subtitle" key={uuid()}>Subtitle...</div>
                <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>keyboard_arrow_right</span>
                </span>
              </IgrListItem>
            </IgrList>
            <IgrList className={classes("list")}>
              <IgrListHeader key={uuid()}>
                <div key={uuid()}>Header</div>
              </IgrListHeader>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar src="/src/assets/7e86e8b8b495deb8eefcdd3556151a40532211e1.png" shape="circle" className={classes("avatar_3")}></IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Default with Subtitle and Avatar</div>
                <div slot="subtitle" key={uuid()}>Subtitle...</div>
                <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>keyboard_arrow_right</span>
                </span>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar src="/src/assets/d4c387693b4db8c8354a14897762a46dcf820844.png" shape="circle" className={classes("avatar_4")}></IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Default with Subtitle and Avatar</div>
                <div slot="subtitle" key={uuid()}>Subtitle...</div>
                <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>keyboard_arrow_right</span>
                </span>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar src="/src/assets/a7f211be67afc061d9571f5b5b5236cd92420e0c.png" shape="circle" className={classes("avatar_5")}></IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Default with Subtitle and Avatar</div>
                <div slot="subtitle" key={uuid()}>Subtitle...</div>
                <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>keyboard_arrow_right</span>
                </span>
              </IgrListItem>
            </IgrList>
          </div>
        </div>
      </div>
    </>
  );
}
