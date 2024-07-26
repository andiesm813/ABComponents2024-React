import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrCard, IgrCardActions, IgrCardContent, IgrCardHeader, IgrCardMedia, IgrCardModule, IgrIconButton, IgrIconButtonModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import styles from './cards.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrCardModule.register();
IgrIconButtonModule.register();
IgrRippleModule.register();

export default function Cards() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();

  return (
    <>
      <div className={classes("column-layout cards-container")}>
        <div className={classes("column-layout group")}>
          <IgrCard className={classes("card")}>
            <IgrCardMedia className={classes("media-content")} key={uuid()}>
              <img src="/src/assets/SketchParser.png" className={classes("image")} key={uuid()} />
            </IgrCardMedia>
            <IgrCardHeader key={uuid()}>
              <h3 slot="title" key={uuid()}>
                <span key={uuid()}>Title goes here...</span>
              </h3>
              <h5 slot="subtitle" key={uuid()}>
                <span key={uuid()}>Subtitle goes here...</span>
              </h5>
            </IgrCardHeader>
            <IgrCardContent className={classes("body-content")} key={uuid()}>
              <p className={classes("typography__body-2 text")} key={uuid()}>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua. </span>
              </p>
            </IgrCardContent>
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
            <IgrCardHeader key={uuid()}>
              <div slot="thumbnail" key={uuid()}>
                <IgrAvatar shape="circle" key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>person</span>
                  </span>
                </IgrAvatar>
              </div>
              <h3 slot="title" key={uuid()}>
                <span key={uuid()}>Title goes here...</span>
              </h3>
              <h5 slot="subtitle" key={uuid()}>
                <span key={uuid()}>Subtitle goes here...</span>
              </h5>
            </IgrCardHeader>
            <IgrCardMedia className={classes("media-content")} key={uuid()}>
              <img src="/src/assets/SketchParser.png" className={classes("image")} key={uuid()} />
            </IgrCardMedia>
            <IgrCardContent className={classes("body-content")} key={uuid()}>
              <p className={classes("typography__body-2 text")} key={uuid()}>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua. </span>
              </p>
            </IgrCardContent>
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
          <IgrCard className={classes("card_1")}>
            <div className={classes("group_1")} key={uuid()}>
              <IgrCardHeader>
                <div slot="thumbnail" key={uuid()}>
                  <IgrAvatar shape="circle" key={uuid()}>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>person</span>
                    </span>
                  </IgrAvatar>
                </div>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>Title goes here...</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}>Subtitle goes here...</span>
                </h5>
              </IgrCardHeader>
              <IgrCardContent className={classes("body-content")}>
                <p className={classes("typography__body-2 text")} key={uuid()}>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua. </span>
                </p>
              </IgrCardContent>
            </div>
            <IgrCardMedia className={classes("media-content_1")} key={uuid()}>
              <img src="/src/assets/SketchParser.png" className={classes("image")} key={uuid()} />
            </IgrCardMedia>
          </IgrCard>
          <IgrCard className={classes("card_1")}>
            <div className={classes("group_2")} key={uuid()}>
              <div className={classes("row-layout")}>
                <IgrCardHeader>
                  <div slot="thumbnail" key={uuid()}>
                    <IgrCardMedia className={classes("media-content_2")} key={uuid()}>
                      <img src="/src/assets/SketchParser.png" key={uuid()} />
                    </IgrCardMedia>
                  </div>
                  <h3 slot="title" key={uuid()}>
                    <span key={uuid()}>Title goes here...</span>
                  </h3>
                  <h5 slot="subtitle" key={uuid()}>
                    <span key={uuid()}>Subtitle goes here...</span>
                  </h5>
                </IgrCardHeader>
              </div>
              <IgrCardContent className={classes("body-content")}>
                <p className={classes("typography__body-2 text")} key={uuid()}>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore et dolore magna aliqua. </span>
                </p>
              </IgrCardContent>
            </div>
            <span className={classes("divider")} key={uuid()}>Divider not yet available in React</span>
            <IgrCardActions className={classes("igx-card-actions--justify actions-content_1")} key={uuid()}>
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
    </>
  );
}
