import React from "react";
import {ImageMosaic, useImageMosaic, GridItem, Grid, Dots} from "storefront-ui";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {productPhotos} from "../../../../data/images";

export default () => {
    let { ref, active, setActive } = useImageMosaic();

    return <div>
        <p>Simplest grid</p>
        <ImageMosaic
            css={css`
                max-width: 300px;
            `}
            images={productPhotos}
            mode={"grid"}
        />

        <p>2 in a row (custom gutters)</p>
        <ImageMosaic
            css={css`
                max-width: 600px;
            `}
            images={productPhotos}
            layout={2}
            gutter={[3, 10]}
        />
        <p>With hook</p>
        <Grid colNumber={4} gutter={20}>
            <GridItem params={3}>
                <ImageMosaic
                    ref={ref}
                    images={productPhotos}
                    mode={"grid"}
                />
            </GridItem>
            <GridItem params={1}>
                <div css={css`
                    position: sticky;
                    top: 20px;
                `}>
                    Active: { active }<br />
                    <Dots css={css`width: 40px;`} active={active} onClick={(n) => setActive(n)} amount={productPhotos.length} vertical={true} />
                </div>
            </GridItem>
        </Grid>

    </div>
};
