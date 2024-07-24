import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrCard, IgrCardActions, IgrCardHeader, IgrCardMedia, IgrCardModule, IgrIconButton, IgrIconButtonModule, IgrList, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import styles from './avatars-images.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrCardModule.register();
IgrIconButtonModule.register();
IgrListModule.register();
IgrRippleModule.register();

export default function AvatarsImages() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();

  return (
    <>
      <div className={classes("row-layout avatars-images-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_1")}>
            <div className={classes("column-layout group_2")}>
              <div className={classes("row-layout group_3")}>
                <IgrAvatar size="large" shape="circle" className={classes("avatar")}></IgrAvatar>
                <IgrAvatar shape="rounded" size="medium" className={classes("avatar")}></IgrAvatar>
                <IgrAvatar className={classes("avatar")}></IgrAvatar>
              </div>
              <p className={classes("typography__subtitle-2 text")}>
                <span>No image</span>
              </p>
            </div>
            <div className={classes("column-layout group_2")}>
              <div className={classes("row-layout group_3")}>
                <IgrAvatar src="/src/assets/a7f211be67afc061d9571f5b5b5236cd92420e0c.png" size="large" shape="circle" className={classes("avatar")}></IgrAvatar>
                <IgrAvatar src="/src/assets/7e86e8b8b495deb8eefcdd3556151a40532211e1.png" shape="rounded" size="medium" className={classes("avatar")}></IgrAvatar>
                <IgrAvatar src="/src/assets/d4c387693b4db8c8354a14897762a46dcf820844.png" className={classes("avatar")}></IgrAvatar>
              </div>
              <p className={classes("typography__subtitle-2 text")}>
                <span>Images from Assets</span>
              </p>
            </div>
            <div className={classes("column-layout group_2")}>
              <div className={classes("row-layout group_3")}>
                <IgrAvatar src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" size="large" shape="circle" className={classes("avatar")}></IgrAvatar>
                <IgrAvatar src="https://images.unsplash.com/photo-1640379878948-72b9db349e17?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" shape="rounded" size="medium" className={classes("avatar")}></IgrAvatar>
                <IgrAvatar src="https://images.unsplash.com/photo-1642861937504-62b536fcc1b9?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className={classes("avatar")}></IgrAvatar>
              </div>
              <p className={classes("typography__subtitle-2 text")}>
                <span>Images from URL</span>
              </p>
            </div>
          </div>
          <div className={classes("row-layout group_2")}>
            <IgrList className={classes("list")}>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar shape="circle" className={classes("avatar")}></IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>No image</div>
                <div slot="subtitle" key={uuid()}>Subtitle...</div>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar src="/src/assets/a06650fce7091f420c440f26201d916f775db29d.png" className={classes("avatar")}></IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Image from Workspace</div>
                <div slot="subtitle" key={uuid()}>Subtitle...</div>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar src="https://images.unsplash.com/photo-1639503611585-1054af5dbfab?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className={classes("avatar")}></IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Image from URL</div>
                <div slot="subtitle" key={uuid()}>Subtitle...</div>
              </IgrListItem>
            </IgrList>
            <IgrList className={classes("list")}>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar size="medium" shape="circle" className={classes("avatar")}></IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>No image</div>
                <div slot="subtitle" key={uuid()}>Subtitle...</div>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar src="/src/assets/10a04583112d68e72f71ea3d9a5d02a35bbdf8d8.png" shape="rounded" size="medium" className={classes("avatar")}></IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Image from Workspace</div>
                <div slot="subtitle" key={uuid()}>Subtitle...</div>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar src="https://images.unsplash.com/photo-1639628735078-ed2f038a193e?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" shape="rounded" size="medium" className={classes("avatar")}></IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Image from URL</div>
                <div slot="subtitle" key={uuid()}>Subtitle...</div>
              </IgrListItem>
            </IgrList>
            <IgrList className={classes("list")}>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar size="large" shape="circle" className={classes("avatar")}></IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>No image</div>
                <div slot="subtitle" key={uuid()}>Subtitle...</div>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar src="/src/assets/82e19827573e63ebf434524f39a708e6fd21f88a.png" size="large" shape="circle" className={classes("avatar")}></IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Image from Workspace</div>
                <div slot="subtitle" key={uuid()}>Subtitle...</div>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar src="https://plus.unsplash.com/premium_photo-1681426472026-60d4bf7b69a1?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" size="large" shape="circle" className={classes("avatar")}></IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Image from URL</div>
                <div slot="subtitle" key={uuid()}>Subtitle...</div>
              </IgrListItem>
            </IgrList>
          </div>
          <div className={classes("row-layout group_4")}>
            <IgrCard className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>No image</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}>Subtitle goes here...</span>
                </h5>
              </IgrCardHeader>
              <IgrCardActions className={classes("actions-content")} key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrButton variant="flat" size="large" className={classes("button")}>
                    <span key={uuid()}>Button</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrIconButton variant="flat">
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>favorite</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrIconButton variant="flat">
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>bookmark</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrIconButton variant="flat">
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>share</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
              </IgrCardActions>
            </IgrCard>
            <IgrCard className={classes("card")}>
              <IgrCardMedia className={classes("media-content")} key={uuid()}>
                <img src="/src/assets/start-building-dark.svg" className={classes("image")} key={uuid()} />
              </IgrCardMedia>
              <IgrCardHeader key={uuid()}>
                <div slot="thumbnail" key={uuid()}>
                  <IgrAvatar src="/src/assets/Avatar13.png" size="large" shape="circle" className={classes("avatar")} key={uuid()}></IgrAvatar>
                </div>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>Images from Assets</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}>Subtitle goes here...</span>
                </h5>
              </IgrCardHeader>
              <IgrCardActions className={classes("actions-content")} key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrButton variant="flat" size="large" className={classes("button")}>
                    <span key={uuid()}>Button</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrIconButton variant="flat">
                    <span className={classes("imx-icon imx-cement-mixer")} key={uuid()}></span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrIconButton variant="flat">
                    <span className={classes("imx-icon imx-bulldozer")} key={uuid()}></span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrIconButton variant="flat">
                    <span className={classes("imx-icon imx-brick-wall")} key={uuid()}></span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
              </IgrCardActions>
            </IgrCard>
            <IgrCard className={classes("card")}>
              <IgrCardMedia className={classes("media-content")} key={uuid()}>
                <img src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className={classes("image")} key={uuid()} />
              </IgrCardMedia>
              <IgrCardHeader key={uuid()}>
                <div slot="thumbnail" key={uuid()}>
                  <IgrAvatar src="https://images.unsplash.com/photo-1636622433525-127afdf3662d?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" size="large" shape="circle" className={classes("avatar")} key={uuid()}></IgrAvatar>
                </div>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>Images From URL</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}>Subtitle goes here...</span>
                </h5>
              </IgrCardHeader>
              <IgrCardActions className={classes("actions-content")} key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrButton variant="flat" size="large" className={classes("button")}>
                    <span key={uuid()}>Button</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrIconButton variant="flat">
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>favorite</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrIconButton variant="flat">
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>bookmark</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrIconButton variant="flat">
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>share</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
              </IgrCardActions>
            </IgrCard>
          </div>
        </div>
        <div className={classes("column-layout group")}>
          <p className={classes("typography__subtitle-2 text")}>
            <span>No image</span>
          </p>
          <img className={classes("image_1")} />
          <p className={classes("typography__subtitle-2 text")}>
            <span>Image from Assets</span>
          </p>
          <img src="/src/assets/SketchParser.png" className={classes("image_1")} />
          <p className={classes("typography__subtitle-2 text")}>
            <span>Image from URL</span>
          </p>
          <img src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className={classes("image_2")} />
        </div>
      </div>
    </>
  );
}
